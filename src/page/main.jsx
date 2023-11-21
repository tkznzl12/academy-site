import styled from "styled-components";
import Main1 from "../assets/img/main/main1.png";
import Main2_1 from "../assets/img/main/main2_1.png";
import Main2_2 from "../assets/img/main/main2_2.png";
import Main3_1 from "../assets/img/main/main3_1.svg";
import Main3_2 from "../assets/img/main/main3_2.svg";
import Main3_3 from "../assets/img/main/main3_3.svg";
import Main4 from "../assets/img/main/main4.png";

const MainPage = styled.div`
  button {
    border: none;
    background-color: #3559e6;
    color: #ffffff;
    width: 100%;
    padding: 0.5vw;
    font-size: 1.87vw;
    margin: 1.5vw 0;
  }

  .main1 {
    font-weight: bold;
    background-color: #000000;
    height: 39.06vw;

    display: flex;
    justify-content: space-between;
    .text {
      color: #ffffff;
      font-size: 2.81vw;
      line-height: 3.5vw;
      text-align: left;
      padding: 0 3vw;
      .title {
        padding-top: 4vw;
      }
      strong {
        color: #90a6ff;
      }
      pre {
        margin-top: 2vw;
        font-size: 2.18vw;
        line-height: 3vw;
      }
    }
    .image {
      position: relative;
      width: 57%;
      overflow: hidden;
      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 115%;
      }
    }
  }

  .width-80 {
    width: 80%;
    margin: 0 auto;
  }

  .mini-title {
    color: #273d95;
    font-weight: 700;
    font-size: 2.81vw;
    line-height: 3.5vw;
    text-align: left;
    margin: 2vw 0 0;
  }
  .main2 {
    .classList {
      display: flex;
      justify-content: space-between;
      margin-top: 3vw;
      .text-part {
        display: flex;
        flex-direction: column;
        gap: 1vw;
        text-align: left;
        p:first-child {
          color: #273d95;
          font-size: 1.87vw;
          font-weight: 700;
        }
        p:nth-child(2) {
          font-size: 2.5vw;
          line-height: 3vw;
          font-weight: 700;
        }
        pre {
          font-family: "Noto Sans KR", sans-serif;
          font-size: 1.87vw;
          line-height: 2.5vw;
        }
      }
    }
  }

  .main3 {
    .main3-text {
      font-size: 1.87vw;
      line-height: 2.5vw;
      font-weight: 700;
      text-align: left;
      margin: 2vw 0;
    }
    .content-part {
      display: flex;
      justify-content: space-between;
      padding: 0 1vw;
      .content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        gap: 1vw;
        div {
          height: 50%;
          img {
            width: auto;
            height: 100%;
          }
        }
        .title {
          font-size: 1.87vw;
          line-height: 2.5vw;
          font-weight: 700;
        }
        pre {
          font-size: 1.4vw;
          line-height: 2vw;
        }
      }
    }

    .related-site {
      display: flex;
      justify-content: space-between;
      margin: 3vw 0;
      button {
        width: 45%;
      }
    }
  }
  .main4 {
    background-color: #000000;
    width: 100%;
    .main4-content {
      display: flex;
      justify-content: space-between;
      padding: 6vw 0px;
      .left-side {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        .mini-title {
          color: #ffffff;
          margin: 0;
        }
      }
    }
  }

  .main5 {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 8vw 0;
    gap: 4vw;
    .mini-title {
      margin: 0;
    }
  }
`;

const Main = () => {
  return (
    <MainPage>
      <div className="main1">
        <div className="text">
          <div className="title">
            <p>국제 학교 전문 코딩 스쿨</p>
            <p>
              <strong>DIYCS</strong>에 오신 것을 환영합니다
            </p>
          </div>
          <pre>
            DIYCS는
            <br />
            최상위권을 목표로 공부하는
            <br />
            모든 학생들에게
            <br />
            전문적인 컴퓨터 교육을
            <br />
            제공합니다.
          </pre>
        </div>
        <div className="image">
          <img src={Main1} alt="main1" />
        </div>
      </div>
      <div className="main2 width-80">
        <div className="mini-title">
          <p>숙련된 교육 노하우로</p>
          <p>컴퓨터 교육의 혁신을 주도합니다.</p>
        </div>
        <div className="classList">
          <div className="text-part">
            <p>Class</p>
            <p>실시간 수업</p>
            <pre>
              체계화된 커리큘럼을 바탕으로 한 이론 강의와
              <br />
              실습 문제를 통해 개발 지식과 역량을
              <br />
              꾸준히 쌓아 올립니다.
              <br />
              실시간으로 지도하여 원활한 질문과 부족한
              <br />
              부분에 대한 실시간 학습이 가능합니다.
            </pre>
          </div>
          <div className="image-part">
            <div className="image">
              <img src={Main2_1} alt="main2_1" />
            </div>
            <button>수업 더 알아보기</button>
          </div>
        </div>
        <div className="classList">
          <div className="text-part">
            <p>Class</p>
            <p>동영상 강의</p>
            <pre>
              언제든지 확인할 수 있는 수업을 통해 부족한
              <br />
              부분에 대한 자기주도학습이 가능합니다.
              <br />
              또한 DIYCS만의 학습 관리를 통해 맞춤형
              <br />
              학습을 할 수 있도록 도와주고 있습니다.
            </pre>
          </div>
          <div className="image-part">
            <div className="image">
              <img src={Main2_2} alt="main2_2" />
            </div>
            <button>수업 더 알아보기</button>
          </div>
        </div>
      </div>

      <div className="main3 width-80">
        <p className="mini-title">왜, DIYCS 일까요?</p>
        <p className="main3-text">DIYCS 만의 3가지 약속</p>
        <div className="content-part">
          <div className="content">
            <div>
              <img src={Main3_1} alt="main3_1" />
            </div>
            <p className="title">[Passion]</p>
            <pre>
              학생들이 Computer Science가
              <br />
              재미있다고 느끼게 하고,
              <br />
              열정적으로 공부 할 수 있도록 도와줍니다.
            </pre>
          </div>
          <div className="content">
            <div>
              <img src={Main3_2} alt="main3_2" />
            </div>
            <p className="title">[Accucrate]</p>
            <pre>
              학생들이 Computer Science의
              <br />
              정확한 정보만을 전달하여
              <br />
              개념중심의 교육을 지향합니다.
            </pre>
          </div>
          <div className="content">
            <div>
              <img src={Main3_3} alt="main3_3" />
            </div>
            <p className="title">[High Quality]</p>
            <pre>
              DIYCS의 체계화된 커리큘럼을 통해
              <br />
              양질의 Computer Science
              <br />
              수업을 제공합니다.
            </pre>
          </div>
        </div>
        <div className="related-site">
          <button>공식블로그</button>
          <button>인스타그램</button>
        </div>
      </div>
      <div className="main4">
        <div className="main4-content width-80">
          <div className="left-side">
            <pre className="mini-title">
              이미 검증된 DIYCS,
              <br />
              후기를 확인해보고 결정하세요
            </pre>
            <button>더 많은 수강후기 확인하기</button>
          </div>
          <div className="right-side">
            <div className="img">
              <img src={Main4} alt="main4" />
            </div>
          </div>
        </div>
      </div>
      <div className="main5">
        <p className="mini-title">DIYCS 관련해서 더 많은 것을 확인해보세요!</p>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/X_MfMkEcCMw?si=8ZrV_QQM4lMRRdMB"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </MainPage>
  );
};

export default Main;
