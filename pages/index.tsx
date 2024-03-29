import {
  Button,
  Flex,
  List,
  SimpleGrid,
  Space,
  Center,
  InputBase,
  Accordion,
  NumberInput,
  Text,
  Checkbox,
  Grid,
} from "@mantine/core";

import Head from "next/head";
import Image from "next/image";
import { useContext, useState } from "react";
import { FormInputContext } from "../store/formInputContext";

export default function Home() {
  const [users, setUsers] = useState<{}>([]);
  const [usersSoj, setUsersSoj] = useState<{}>([]);
  const [activeUsers, setActiveUsers] = useState<string[]>([]);
  const {
    repair,
    setRepair,
    silver,
    setSilver,
    total,
    setTotal,
    name,
    setName,
  } = useContext(FormInputContext);

  function generateJson(list: string) {
    let listJson = {};
    const result = list.split("\n").map((item, index) => {
      return { [item.split(".")[1]]: index + 1 };
    });
    result.map((e) => {
      const jsonString = JSON.stringify(e);
      const jsonParsed = JSON.parse(jsonString);

      listJson = { ...listJson, ...jsonParsed };
    });
    return listJson;
  }

  return (
    <>
      <Head>
        <title>Rozliczenia</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SimpleGrid cols={2} verticalSpacing="xs">
        <div>
          <Accordion
            variant="separated"
            radius="md"
            defaultValue="customization"
          >
            <Accordion.Item value="customization">
              <Accordion.Control>Input</Accordion.Control>
              <Accordion.Panel>
                <InputBase
                  placeholder="Name"
                  label="Name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
                <NumberInput
                  placeholder="Silver"
                  label="Silver"
                  defaultValue={0}
                  value={silver}
                  onChange={(event) => {
                    if (event) {
                      setSilver(event);
                    } else {
                      setSilver(0);
                    }
                  }}
                />
                <NumberInput
                  placeholder="Repair"
                  label="Repair"
                  defaultValue={0}
                  value={repair}
                  onChange={(event) => {
                    if (event) {
                      setRepair(event);
                    } else {
                      setRepair(0);
                    }
                  }}
                />
                <NumberInput
                  placeholder="Total"
                  label="Total"
                  defaultValue={0}
                  value={total}
                  onChange={(event) => {
                    if (event) {
                      setTotal(event);
                    } else {
                      setTotal(0);
                    }
                  }}
                />
              </Accordion.Panel>
            </Accordion.Item>
          </Accordion>
          {[...Object.keys(users), ...Object.keys(usersSoj)].map((element) => (
            <Button
              key={element}
              color={!activeUsers.includes(element) ? "gray" : "blue"}
              onClick={() => {
                if (activeUsers.includes(element)) {
                  setActiveUsers(activeUsers.filter((el) => el !== element));
                } else {
                  setActiveUsers([...activeUsers, element]);
                }
              }}
            >
              {element}
            </Button>
          ))}
          <Button
            onClick={() => {
              const items = `1.1
              2.2
              3.3
              4.4
              5.5
              6.6
              7.7
              8.8
              9.9
              10.10
              11.11
              12.12
              13.13
              14.14
              15.
              16.
              17.
              18.
              19.
              20.
              21.
              22.`;

              const sojItems = `1.
              2.
              3.
              4.
              5.
              6.
              7.
              8.
              9.
              10.
              11.
              12.
              13.
              14.
              15.
              16.
              17.
              18.
              19.
              20.
              21.`;

              const guildUsers = generateJson(items);
              const sojUsers = generateJson(sojItems);

              setUsers(guildUsers);
              setUsersSoj(sojUsers);
            }}
          >
            Click
          </Button>
          <Text fz="xl">Event: {name}.</Text>
          <Text fz="xl">
            Z woreczków sypło {silver.toLocaleString()} silvera.
          </Text>
          <Text fz="xl">
            Na naprawę poszło {repair.toLocaleString()} silvera.
          </Text>
          <Text fz="xl">
            Z itemków i silvera zdobyto {(total + silver).toLocaleString()}{" "}
            silvera.
          </Text>
          <Text fz="xl">
            Dla rozliczającego 5% wynosi:{" "}
            {((total + silver) * 0.05).toLocaleString()} silvera
          </Text>
          <Text fz="xl">
            Po odliczeniu naprawy i 5%, profit wynosi:{" "}
            {((total + silver) * 0.95 - repair).toLocaleString()}
          </Text>
          <Text fz="xl">
            Na głowę zarobiliście{" "}
            {(
              ((total + silver) * 0.95 - repair) /
              activeUsers.length
            ).toLocaleString()}{" "}
            silvera.
          </Text>
          <Text>Gotowe pingi: {activeUsers.map((e) => ` @${e}`)}</Text>
        </div>
        <div>
          <Flex
            mih={50}
            bg="rgba(0, 0, 0, .3)"
            gap="md"
            justify="flex-start"
            align="flex-start"
            direction="row"
            wrap="nowrap"
          >
            <Grid>
              <Grid.Col span="auto">
                {Object.keys(users)
                  .filter((e) => activeUsers.includes(e))
                  .map((e) => {
                    const jsonString = JSON.stringify(users);
                    const jsonParsed = JSON.parse(jsonString);

                    return (
                      <Checkbox key={e} label={`${e}, nr ${jsonParsed[e]}`} />
                    );
                  })}
              </Grid.Col>
            </Grid>

            <div>
              <Image
                src="/images/bw_guild.png"
                alt=""
                width={500}
                height={400}
              />
            </div>
          </Flex>
          <Space h="md" />
          <Flex
            mih={50}
            bg="rgba(0, 0, 0, .3)"
            gap="md"
            justify="flex-start"
            align="flex-start"
            direction="row"
            wrap="nowrap"
          >
            <Grid>
              <Grid.Col span="auto">
                {Object.keys(usersSoj)
                  .filter((e) => activeUsers.includes(e))
                  .map((e) => {
                    const jsonString = JSON.stringify(usersSoj);
                    const jsonParsed = JSON.parse(jsonString);

                    return (
                      <Checkbox key={e} label={`${e}, nr ${jsonParsed[e]}`} />
                    );
                  })}
              </Grid.Col>
            </Grid>

            <Center>
              <Image src="/images/bw_soj.png" alt="" width={500} height={400} />
            </Center>
          </Flex>
        </div>
      </SimpleGrid>
    </>
  );
}
