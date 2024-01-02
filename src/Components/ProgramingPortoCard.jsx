import {
  Image,
  CardBody,
  Card,
  Stack,
  Heading,
  Text,
  Button,
  Flex,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";

import { faAtom } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import { motion } from "framer-motion";

const programmingPortoCard = ({
  img,
  title,
  desc,
  techUsed,
  linkGithub,
  linkPreview,
}) => {
  return (
    <Card
      borderRadius='15'
      bgGradient={useColorModeValue(
        "linear(primary.white, primary.white)",
        "linear(fontColor.dark, fontColor.black)"
      )}
      boxShadow={`0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06), -4px 0px 6px rgba(0, 0, 0, 0.1), 4px 0px 6px rgba(0, 0, 0, 0.1)`}
      variant={useColorModeValue("outline", "filled")}
      minHeight='440px'
      minW='300'
    >
      <Image src={img} borderTopRadius='15' />
      <CardBody>
        <Stack>
          <Flex justifyContent='space-between'>
            <Flex>
              <Icon as={FontAwesomeIcon} icon={faAtom} boxSize='5' mt='0.5' />
              <Heading fontSize='18'>{title}</Heading>
            </Flex>
            <motion.a
              href={linkGithub}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Button
                colorScheme='teal'
                variant='outline'
                size='sm'
                borderRadius='full'
                mt='-0.5'
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  color={useColorModeValue(
                    "fontColor.black",
                    "primary.whiteDoff"
                  )}
                />
              </Button>
            </motion.a>
          </Flex>
          <Heading fontWeight='medium' fontSize='md' mt='2'>
            Description
          </Heading>
          <Text mt='-2' fontSize='sm'>
            {desc}
          </Text>
        </Stack>

        {/* Sub Title Tech Used Start */}
        <Stack gap='3' mt='3'>
          <Heading fontWeight='medium' fontSize='md'>
            Technology Used
          </Heading>
          {techUsed && (
            <Flex>
              {techUsed.map((logos, index) => (
                <Image
                  key={index}
                  src={logos ? logos : undefined}
                  borderRadius='10'
                  boxSize={techUsed ? { base: "30px", xl: "30px" } : undefined}
                  mr='2'
                  mt='-1'
                  objectFit='contain'
                />
              ))}
            </Flex>
          )}
        </Stack>
        {/* Sub Title Tech Used End */}

        {/* Preview Link Button Start */}
        <Stack direction='row' justifyContent='flex-end' mt='5'>
          <motion.a
            href={linkPreview}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Button
              colorScheme='teal'
              variant='outline'
              size={"sm"}
              color={useColorModeValue("fontColor.black", "primary.whiteDoff")}
            >
              Preview
            </Button>
          </motion.a>
        </Stack>
        {/* Preview Link Button End */}
      </CardBody>
    </Card>
  );
};

export default programmingPortoCard;
