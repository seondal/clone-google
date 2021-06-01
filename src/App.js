import styled from "styled-components"
import profile from "./assets/profile.jpg"
import logo from "./assets/google.png"
import menu from "./assets/menu.PNG"
import search from "./assets/search.PNG"
import buttons from "./assets/button.PNG"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100px;
  margin: 0;
  background: #393E46;
`
const Header = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: flex-end;
  height:50px;
  mprgin-top:3px;
`

const Button = styled.button`
  margin-right:10px;
  background: #393E46;
  border: none;
  outline:none;
`

const Image = styled.button`
  margin-right: 10px;
  margin-top:10px;
  background: #393E46 ;
  border: none;
  outline: none;
`

const Center = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 200px;
`

const Logo = styled.image`
  margin-right:10px;
  margin-top:0px;
  background: #393E46;
  border : none;
  outline : none;
`

const Input = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  width: 550px;
  height: 40px;
  border-radius: 30px;
  border: 1px #EDEDED solid;
  outline: none;
  background: #FFFFFF;
`

const InputConsol = styled.input`
  border: none;
  width:400px;
  outline:none;
`

const Row = styled.div`
   display: flex;
   flex-direction: row;
   align-items: flex-end;
`

const GrayButton = styled.button`
  margin-right:20px;
  background: #AAD8D3;
  border: none;
  outline: none;
  margin-top: 30px;
  height: 35px;
  padding-left: 10px;
  padding-right:10px;
  border-radius: 10px;
`
const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-content: flex-end;
  justify-content : flex-start;
`
const Footer1 = styled.div`
margin-top:310px;
color:gray;
align-content:flex-end;
padding-left : 10px;
padding-top : 10px;
padding-bottom : 10px;
font-size: 13px;
background-color : #AAD8D3;
`
const Footer2 = styled.div`
  color: gray;
  border-top : 5px #00462A single ;
  padding-left : 10px;
  padding-top : 10px;
  padding-bottom : 10px;
  font-size: 13px;
  background-color: #AAD8D3; 
  
`

function App() {
  return (
    <Wrapper>
      <Header>
        <Button><a style={{color: "#EEEEEE"}}>Gmail</a></Button>
        <Button><a style={{color: "#EEEEEE"}}>이미지</a></Button>
        <Button><img src={menu} style={{ marginTop: "8px" }} /></Button>
        <Image><img src={profile} style={{ borderRadius: "50%" }} /></Image>
      </Header>

      <Center>
        <Logo><img src={logo} /></Logo>
        <Input>
          <img src={search} style={{ margin: "7px" }} />
          <InputConsol></InputConsol>
          <img src={buttons} style={{ height: "100%", borderRadirus: "50%", marginRight: "10px" }} />
        </Input>

        <Row>
          <GrayButton><a style={{color: "#393E46"}}>Google 검색</a></GrayButton>
          <GrayButton><a style={{color: "#393E46"}}>I'm Feeling Lucky</a></GrayButton>
        </Row>

        <div style={{ marginTop: "20px" }}>
          <a style={{ fontSize: "14px", color:"#FFFFFF" }}>Google 제공 서비스 :
            <a style={{ color: "#3879D5" }}> English</a></a>
        </div>

      </Center>

      <FooterWrapper>
        <Footer1>대한민국</Footer1>
        <Footer2>
          <a href="" style={{ marginRight: "23px" }}>Google 정보</a>
          <a href="" style={{ marginRight: "23px" }}> 광고 </a>
          <a href="" style={{ marginRight: "23px" }}> 비즈니스 </a>
          <a href="" style={{ marginRight: "23px" }}> 검색의 원리 </a>
          <a href="" style={{ marginLeft: "80rem", marginRight: "23px" }}> 개인정보처리방침 </a>
          <a href="" style={{ marginRight: "23px" }}> 약관 </a>
          <a style={{ marginRight: "23px" }}> 설정 </a>
        </Footer2>
      </FooterWrapper>


    </Wrapper>
  );
}

export default App;
