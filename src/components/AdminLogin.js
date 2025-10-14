import React, { useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../index";
import styled from "styled-components";

const Section = styled.div`
  padding-top: 80px;
  min-height: 100vh;
  background-color: #fdfcf8;
  border-radius: 10px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const AdminLogin = () => {
  const [error, setError] = useState(null);
  const [userInfo, setUserInfo] = useState({ name: "", affiliation: "" });
  const [isSigningUp, setIsSigningUp] = useState(false);
  const auth = getAuth();
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      const adminDoc = await getDoc(doc(db, "admin", user.uid));
      if (adminDoc.exists()) {
        const adminData = adminDoc.data();
        if (adminData.isAdmin) {
          navigate("/dashboard"); // 관리자인 경우 대시보드로 이동
        } else {
          setError(
            "관리자가 권한을 부여하기 전에는 이 기능을 사용할 수 없습니다."
          );
        }
      } else {
        setIsSigningUp(true); // 관리자가 아닌 경우 회원가입 절차 진행
      }
    } catch (error) {
      console.error("Google login error:", error);
      setError("로그인에 실패했습니다.");
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    const user = auth.currentUser;

    try {
      await setDoc(doc(db, "admin", user.uid), {
        uid: user.uid,
        email: user.email,
        name: userInfo.name,
        affiliation: userInfo.affiliation,
        isAdmin: false,
        createdAt: new Date(),
      });

      setError(
        "회원가입이 완료되었습니다. 관리자가 권한 부여 후 대시보드 사용이 가능합니다. "
      );
    } catch (error) {
      console.error("Sign-up error:", error);
      setError("회원가입에 실패했습니다.");
    }
  };

  return (
    <Section>
      <div>
        <h1>Admin Login</h1>
        {error && <p>{error}</p>}
        {isSigningUp ? (
          <form onSubmit={handleSignUp}>
            <label>
              이름:
              <input
                type="text"
                value={userInfo.name}
                onChange={(e) =>
                  setUserInfo({ ...userInfo, name: e.target.value })
                }
                required
              />
            </label>
            <label>
              소속:
              <input
                type="text"
                value={userInfo.affiliation}
                onChange={(e) =>
                  setUserInfo({ ...userInfo, affiliation: e.target.value })
                }
                required
              />
            </label>
            <button type="submit">회원가입</button>
          </form>
        ) : (
          <button onClick={handleGoogleLogin}>Login with Google</button>
        )}
      </div>
    </Section>
  );
};

export default AdminLogin;
