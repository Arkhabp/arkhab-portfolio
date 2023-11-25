import {
  Box,
  Flex,
  Heading,
  Card,
  Image,
  Stack,
  CardBody,
  Text,
  UnorderedList,
  useColorModeValue,
} from "@chakra-ui/react";

const CardComponent = ({
  uni,
  fieldOfStudy,
  year,
  activity,
  activityPoint,
  logo,
  titleTools,
  logoTools,
  desc,
}) => {
  return (
    <Flex justifyContent='center' alignItems='center'>
      <Card
        direction='row'
        overflow='hidden'
        borderRadius='15'
        variant={useColorModeValue("outline", "filled")}
        bgGradient={useColorModeValue(
          "linear(primary.white, primary.white)",
          "linear(to-t, fontColor.dark, fontColor.black)"
        )}
        boxShadow={`0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06), -4px 0px 6px rgba(0, 0, 0, 0.1), 4px 0px 6px rgba(0, 0, 0, 0.1)`}
        width={{ md: "100%", xl: "100%", md: "100%" }}
        mt='3'
      >
        <Image
          src={logo}
          boxSize={{ base: "40px", xl: "45px" }}
          mt='5'
          ml='5'
        />

        <Stack>
          <CardBody>
            <Box>
              <Heading
                size={{ base: "sm", xl: "md" }}
                fontWeight='medium'
                color={useColorModeValue(
                  "fontColor.black",
                  "primary.whiteDoff"
                )}
              >
                {uni}
              </Heading>
              <Heading
                fontWeight='normal'
                fontSize={{ base: "13", xl: "17" }}
                color={useColorModeValue(
                  "fontColor.black",
                  "primary.whiteDoff"
                )}
                mt='0.5'
              >
                {fieldOfStudy}
              </Heading>
              <Heading
                fontWeight='light'
                fontSize={{ base: "13", xl: "15" }}
                color={useColorModeValue(
                  "fontColor.black",
                  "primary.whiteDoff"
                )}
                mt='0.5'
              >
                {year}
              </Heading>
            </Box>

            <Box mt='3'>
              <Heading
                fontSize={{ base: "sm", xl: "md" }}
                fontWeight='medium'
                color={useColorModeValue(
                  "fontColor.black",
                  "primary.whiteDoff"
                )}
              >
                {desc}
              </Heading>
              <Text
                mt='0.5'
                fontSize={{ base: "12", xl: "15" }}
                color={useColorModeValue(
                  "fontColor.black",
                  "primary.whiteDoff"
                )}
              >
                {activity}
              </Text>
              <UnorderedList
                mt='0.5'
                fontSize={{ base: "12", xl: "15" }}
                color={useColorModeValue(
                  "fontColor.black",
                  "primary.whiteDoff"
                )}
              >
                {activityPoint}
              </UnorderedList>
            </Box>

            <Box>
              <Heading
                fontSize={{ base: "sm", xl: "md" }}
                fontWeight='medium'
                color={useColorModeValue(
                  "fontColor.black",
                  "primary.whiteDoff"
                )}
                mt={titleTools ? "3" : undefined}
              >
                {titleTools}
              </Heading>
              {logoTools && (
                <Flex>
                  {logoTools.map((logos, index) => (
                    <Image
                      key={index}
                      src={logos ? logos : undefined}
                      borderRadius='10'
                      boxSize={
                        logoTools ? { base: "30px", xl: "37px" } : undefined
                      }
                      mt='1.5'
                      mr='2'
                      objectFit='contain'
                    />
                  ))}
                </Flex>
              )}
            </Box>
          </CardBody>
        </Stack>
      </Card>
    </Flex>
  );
};

export default CardComponent;
