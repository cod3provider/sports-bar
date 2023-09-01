import styled from "styled-components/macro";
import {Link} from "react-router-dom";

export const FooterListWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
`

export const FooterList = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 162px;
`

// export const FooterSocialList = styled.ul``

export const FooterSocialItem = styled.li`
  padding: 8px;
  border-radius: 50%;
  background-color: #D9D9D9;
`
// export const FooterSocialIcon = styled.

export const FooterSocialLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
`
