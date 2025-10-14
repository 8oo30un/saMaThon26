import React, { useState } from "react";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";
import { db, storage } from "../index";

const Section = styled.div`
  margin-top: 80px;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 10px;
  font-weight: bold;
  color: #333;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 20px;
  background-color: #fff;
  color: #333;
  border: 1px solid #ddd;
  border-radius: 5px;

  &:focus {
    outline: none;
    border-color: #bbb;
  }
`;

const Select = styled.select`
  padding: 10px;
  margin-bottom: 20px;
  background-color: #fff;
  color: #333;
  border: 1px solid #ddd;
  border-radius: 5px;

  &:focus {
    outline: none;
    border-color: #bbb;
  }
`;

const Button = styled.button`
  padding: 10px 15px;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background-color: #555;
  }
`;

const ArticleForm = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("후기");
  const [writer, setWriter] = useState(""); // State for writer input
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [thumbnailUrl, setThumbnailUrl] = useState(""); // For storing the thumbnail URL
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const content = draftToHtml(convertToRaw(editorState.getCurrentContent()));

    try {
      const docRef = await addDoc(collection(db, "notices"), {
        title,
        category,
        writer, // Save the writer field
        content,
        thumbnailUrl, // Save the thumbnail URL
        createdAt: new Date(),
      });

      setTitle("");
      setCategory("후기");
      setWriter(""); // Reset writer input
      setEditorState(EditorState.createEmpty());
      setThumbnailUrl(""); // Reset thumbnail URL
      navigate(`/notice/${docRef.id}`);
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Failed to save the article. Please try again.");
    }
  };

  const handleImageUpload = async (file) => {
    const imageRef = ref(storage, `images/${file.name}`);
    try {
      const snapshot = await uploadBytes(imageRef, file);
      const imageUrl = await getDownloadURL(snapshot.ref);

      // Set the thumbnail URL if it's not already set
      if (!thumbnailUrl) {
        setThumbnailUrl(imageUrl);
      }

      // Return the URL to the editor to insert the image
      return { data: { link: imageUrl } };
    } catch (error) {
      console.error("Upload failed:", error);
      return null;
    }
  };

  return (
    <Section>
      <Form onSubmit={handleSubmit}>
        <Label>Title</Label>
        <Input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <Label>Category</Label>
        <Select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        >
          <option value="후기">후기</option>
          <option value="현장스케치">현장스케치</option>
          <option value="공지">공지</option>
        </Select>
        <Label>Writer</Label> {/* Added writer input field */}
        <Input
          type="text"
          value={writer}
          onChange={(e) => setWriter(e.target.value)}
          required
        />
        <Label>Content</Label>
        <Editor
          editorState={editorState}
          onEditorStateChange={setEditorState}
          toolbar={{
            image: {
              uploadCallback: handleImageUpload,
              alt: { present: true, mandatory: false },
            },
            options: [
              "inline",
              "blockType",
              "fontSize",
              "list",
              "textAlign",
              "link",
              "image",
              "history",
            ],
          }}
          editorStyle={{
            backgroundColor: "#fff",
            color: "#333",
            padding: "10px",
            minHeight: "400px", // Increased the height here
            borderRadius: "5px",
            border: "1px solid #ddd",
          }}
        />
        <Button type="submit">Save Article</Button>
      </Form>
    </Section>
  );
};

export default ArticleForm;
