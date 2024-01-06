import {
  Flex,
  Heading,
  Box,
  Spacer,
  Show,
  Hide,
  MenuButton,
  MenuList,
  MenuItem,
  Menu,
  useColorModeValue,
  Icon,
} from "@chakra-ui/react";
// import { Link } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import { faBars, faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ToggleColorMode from "./ToggleColorMode";
import "../dist/css/theme";

const NavbarComponent = () => {
  return (
    <Flex
      className='navbar'
      position='sticky'
      top='0'
      zIndex='100'
      bgColor={useColorModeValue("transparent", "fontColor.black")}
    >
      <Hide breakpoint='(max-width: 989px)'>
        <Flex w='100%' mx='20' py='5' display={"flex"} alignItems='center'>
          <Box display={"flex"}>
            <Link to='#about-me' smooth activeClassName='active-link'>
              <Heading
                fontWeight={"bold"}
                size={"md"}
                color={useColorModeValue(
                  "fontColor.black",
                  "primary.whiteDoff"
                )}
              >
                About Me
              </Heading>
            </Link>
            <Link to='#experience' smooth activeClassName='active-link'>
              <Heading
                ml={8}
                fontWeight={"bold"}
                size={"md"}
                color={useColorModeValue(
                  "fontColor.black",
                  "primary.whiteDoff"
                )}
              >
                Experience
              </Heading>
            </Link>
            <Link to='#education' smooth activeClassName='active-link'>
              <Heading
                ml={8}
                fontWeight={"bold"}
                size={"md"}
                color={useColorModeValue(
                  "fontColor.black",
                  "primary.whiteDoff"
                )}
              >
                Education
              </Heading>
            </Link>
            <Link to='#portfolio' smooth activeClassName='active-link'>
              <Heading
                ml={8}
                fontWeight={"bold"}
                size={"md"}
                color={useColorModeValue(
                  "fontColor.black",
                  "primary.whiteDoff"
                )}
              >
                Portfolio
              </Heading>
            </Link>
          </Box>
          <Spacer />
          <Flex alignItems='center'>
            <a
              href='https://drive.google.com/file/d/1QsXoSthybAhpCJsLzR_jjnYHa-HoAplZ/view?usp=sharing'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Heading fontWeight={"bold"} size={"md"} mr='4'>
                Resume
              </Heading>
            </a>
            <ToggleColorMode />
          </Flex>
        </Flex>
      </Hide>

      <Show breakpoint='(max-width: 989px)'>
        <Flex
          w='100%'
          px={5}
          display={"flex"}
          bgColor={"fontColor.white"}
          alignItems='center'
        >
          <Box>
            <ToggleColorMode />
          </Box>
          <Spacer />
          <Box py='3'>
            <Menu>
              <MenuButton
                as={FontAwesomeIcon}
                icon={faBars}
                aria-label='Options'
                variant='outline'
              />
              <MenuList>
                <Link to='#about-me' smooth>
                  <MenuItem
                    key='about-me'
                    _focus={{ outline: "none" }}
                    command='⌘A'
                  >
                    About Me
                  </MenuItem>
                </Link>
                <Link to='#experience' smooth>
                  <MenuItem
                    key='experience'
                    _focus={{ outline: "none" }}
                    command='⌘E'
                  >
                    Experience{" "}
                  </MenuItem>
                </Link>
                <Link to='#education' smooth>
                  <MenuItem
                    key='education'
                    _focus={{ outline: "none" }}
                    command='⌘E'
                  >
                    Education
                  </MenuItem>
                </Link>
                <Link to='#portfolio' smooth>
                  <MenuItem
                    key='portfolio'
                    _focus={{ outline: "none" }}
                    command='⌘P'
                  >
                    Portofolio
                  </MenuItem>
                </Link>
                <a
                  href='https://drive.google.com/file/d/1QsXoSthybAhpCJsLzR_jjnYHa-HoAplZ/view?usp=sharing'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Flex alignItems='center' justifyContent='flex-end' px='4'>
                    <MenuItem
                      key='download-resume'
                      _focus={{ outline: "none" }}
                    >
                      Resume
                    </MenuItem>
                    <Icon as={FontAwesomeIcon} icon={faDownload} />
                  </Flex>
                </a>
              </MenuList>
            </Menu>
          </Box>
        </Flex>
      </Show>
    </Flex>
  );
};

export default NavbarComponent;
