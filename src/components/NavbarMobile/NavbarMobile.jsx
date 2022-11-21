import {
  Close,
  Container,
  LinkMobile,
  NavMobileHeader,
} from "./NavbarMobile.styled";

export const NavMobile = ({open, handleMenu}) => {
  return (
    <Container open={open}>
      <NavMobileHeader>
        <Close onClick={() => handleMenu(false)} />
      </NavMobileHeader>
      <LinkMobile width={"100%"} to='/home'>
        Home
      </LinkMobile>
      <LinkMobile width={"100%"} to='/gameconfig'>
        Create Match
      </LinkMobile>
      <LinkMobile width={"100%"} to='/botsubmit'>
        Create Bot
      </LinkMobile>
      <LinkMobile width={"100%"} to='/listgames'>
        List Matches
      </LinkMobile>
      <LinkMobile width={"100%"} to='/simCreate'>
        Create Simulation
      </LinkMobile>
      <LinkMobile width={"100%"} to='/library'>
        Robots Library
      </LinkMobile>
    </Container>
  );
};
