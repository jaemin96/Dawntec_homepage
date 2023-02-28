// 리액트 (클라이언트) 에서 파일 업로드 하는 방법이다.


import './App.css';
// npm i aws-sdk
// npm i reactstrap
import React,{useState} from "react";
import AWS from 'aws-sdk';
import { Row, Col, Button, Input, Alert } from 'reactstrap';

function S3Upload(){
    //변수 선언
    const [progress , setProgress] = useState(0);
    const [selectedFile, setSelectedFile] = useState(null);
    const [showAlert, setShowAlert] = useState(false);

    //s3 정보를 설정합니다. -> aws 사이트 들어가서 로그인 후 -> 검색창에 iam 친다. -> IAM 클릭 하면 나온다.
    //My Security Credentials(보안자격증명 , 우측 중단에 있음)클릭
    const ACCESS_KEY = 'AKIAUR7FATCGK5JU5ANA';
    const SECRET_ACCESS_KEY = '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';
    //검색창에 s3 치고 클릭 -> 속성 클릭  찾아라
    const REGION = "ap-northeast-2";
    const S3_BUCKET = 'dawntech-upload';

    AWS.config.update({
        accessKeyId: ACCESS_KEY,
        secretAccessKey: SECRET_ACCESS_KEY
      });
      
      const myBucket = new AWS.S3({
        params: { Bucket: S3_BUCKET},
        region: REGION,
      });

      const handleFileInput = (e) => {
        const file = e.target.files[0];
        const fileExt = file.name.split('.').pop();
      //  if(file.type !== 'image/jpeg' || fileExt !=='jpg'){
       //   alert('jpg 파일만 Upload 가능합니다.');
      //    return;
      //  }
        setProgress(0);
        setSelectedFile(e.target.files[0]);
      }

      const uploadFile = (file) => {
        const params = {
          ACL: 'public-read', //ACL : 업로드 시 파일 권한 설정
          Body: file,
          Bucket: S3_BUCKET, //업로드할 버킷명
          Key: "upload/" + "20210924"//file.name//Key : (버킷 제외) 저장될 S3 폴더 경로+파일명
        };

        myBucket.putObject(params)
        .on('httpUploadProgress', (evt) => {
          setProgress(Math.round((evt.loaded / evt.total) * 100))
          setShowAlert(true);
          setTimeout(() => {
            setShowAlert(false);
            setSelectedFile(null);
          }, 3000)
        })
        .send((err) => {
          if (err) console.log(err)
        })
    }

    return(
        <div className="App">
        <div className="App-header">
          <Row>
            <Col><h1>File Upload</h1></Col>
          </Row>
        </div>
        <div className="App-body">
          <Row>
            <Col>
              { showAlert?
                <Alert color="primary">업로드 진행률 : {progress}%</Alert>
                : 
                <Alert color="primary">파일을 선택해 주세요.</Alert> 
              }
            </Col>
          </Row>
          <Row>
            <Col>
              <Input color="primary" type="file" onChange={handleFileInput}/>
              {selectedFile?(
                <Button color="primary" onClick={() => uploadFile(selectedFile)}> Upload to S3</Button>
              ) : null }
            </Col>
          </Row>
        </div>

        <label htmlFor="upload" className="image-upload-wrapper">
          <img className="profile-img2"
          src={`https://dawntech-upload.s3.ap-northeast-2.amazonaws.com/upload/20210924`}/>
        </label>
      </div>
    )
}

export default S3Upload;