import React from "react";
import styled from "styled-components";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import eravatar from "../../images/avator.jpg";

export const Topbar = () => {
  const TopBar = styled.div`
    width: 100%;
    height: 50px;
    backgroud-colore: white;
    position: sticky;
    top: 0;
    z-index: 999;
  `;
  const TopBarWrapper = styled.div`
    height: 100%;
    padding: 0px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `;
  const TopLeft = styled.div``;
  const TopRight = styled.div`
    display: flex;
    align-items: center;
  `;
  const Logo = styled.span`
    font-weight: bold;
    font-size: 30px;
    color: darkblue;
    cursor: pointer;
  `;
  const TopBarIconContainer = styled.div`
    position: relative;
    cursor: pointer;
    margin-right: 10px;
    color: #555;
  `;
  const TopIconBag = styled.span`
    width: 15px;
    height: 15px;
    position: absolute;
    top: -5px;
    right: 0x;
    background-color: red;
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
  `;
  const AvatorContainer = styled.div`
    height: 40px;
    width: 40px;
    border-radius: 50%;
  `;
  const AvatorImage = styled.img`
    width: 80%;
    height: 80%;
    border-radius: 50%;
  `;
  return (
    <div>
      <TopBar>
        <TopBarWrapper>
          <TopLeft>
            <Logo>Yetaba LIj</Logo>
          </TopLeft>
          <TopRight>
            <TopBarIconContainer>
              <NotificationsNone />
              <TopIconBag>2</TopIconBag>
            </TopBarIconContainer>
            <TopBarIconContainer>
              <Language />
              <TopIconBag>2</TopIconBag>
            </TopBarIconContainer>
            <TopBarIconContainer>
              <Settings />
            </TopBarIconContainer>
            <TopBarIconContainer>
              <AvatorContainer>
                <AvatorImage src={eravatar} />
              </AvatorContainer>
            </TopBarIconContainer>
          </TopRight>
        </TopBarWrapper>
      </TopBar>
    </div>
  );
};
