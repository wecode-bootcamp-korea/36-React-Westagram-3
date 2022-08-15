import React from 'react';

function MainRight() {
  return (
    <div className="main-right">
      <div className="main-right-firstBox">
        <div className="main-right-firstBox-box">
          <div className="main-right-firstBox-img">
            <img alt="main-right-img" src="" />
          </div>
          <div className="main-right-firstBox-text">
            <div className="firstBox-text-bold">wecode_bootcamp</div>
            <div className="firstBox-text-normal">WeCode | 위코드</div>
          </div>
        </div>
      </div>

      <div className="main-right-secondBox">
        <div className="main-right-secondBox-header">
          <div className="secondBox-header-normal">스토리</div>
          <div className="secondBox-header-bold">모두보기</div>
        </div>

        <div className="main-right-secondBox-container">
          <div className="firstman">
            <div className="firstman-img">
              <img alt="firstman-profile" src="" />
            </div>
            <div className="firstman-text">
              <div className="firstman-text-bold">_yum_s</div>
              <div className="firstman-text-normal">16분전</div>
            </div>
          </div>

          <div className="secondman">
            <div className="secondman-img">
              <img alt="secondman-profile" src="" />
            </div>

            <div className="secondman-text">
              <div className="secondman-text-bold">drink_eat_drink</div>

              <div className="secondman-text-normal">3시간 전</div>
            </div>
          </div>

          <div className="thirdman">
            <div className="thirdman-img">
              <img alt="thirdman-profile" src="" />
            </div>

            <div className="thirdman-text">
              <div className="thirdman-text-bold">hyukyc</div>

              <div className="thirdman-text-normal">20시간 전</div>
            </div>
          </div>
        </div>
      </div>

      <div className="main-right-thirdBox">
        <div className="main-right-thirdBox-header">
          <div className="main-right-thirdBox-header-textbox">
            <div className="thirdBox-normal">회원님을 위한 추천</div>
            <div className="thirdBox-bold">모두 보기</div>
          </div>
        </div>

        <div className="main-right-thirdBox-box">
          <div className="thirdBox-firstman">
            <div className="thirdBox-firstman-img-text">
              <div className="thirdBox-firstman-img">
                <img alt="thirdBox-firstman-profile" src="" />
              </div>
              <div className="thirdBox-firstman-text">
                <div className="thirdBox-firstman-text-bold">joaaahye</div>
                <div className="thirdBox-firstman-text-normal">
                  _legend_a외 2명이...
                </div>
              </div>
            </div>
            <div className="thirdBox-firstman-follow">팔로우</div>
          </div>

          <div className="thirdBox-secondman">
            <div className="thirdBox-secondman-img-text">
              <div className="thirdBox-secondman-img">
                <img alt="thirdBox-secondman-profile" src="/" />
              </div>
              <div className="thirdBox-secondman-text">
                <div className="thirdBox-secondman-text-bold">rampart81</div>
                <div className="thirdBox-secondman-text-normal">
                  ring.in.seoul님 외 12...
                </div>
              </div>
            </div>
            <div className="thirdBox-secondman-follow">팔로우</div>
          </div>

          <div className="thirdBox-thirdman">
            <div className="thirdBox-secondman-img-text">
              <div className="thirdBox-thirdman-img">
                <img alt="thirdBox-thirdman-profile" src="" />
              </div>
              <div className="thirdBox-thirdman-text">
                <div className="thirdBox-thirdman-text-bold">shawnoojo</div>
                <div className="thirdBox-thirdman-text-normal">
                  jimmylee님 외 1...
                </div>
              </div>
            </div>
            <div className="thirdBox-thirdman-follow">팔로우</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainRight;
