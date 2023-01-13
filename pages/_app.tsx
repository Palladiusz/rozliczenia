import { AppProps } from "next/app";
import Head from "next/head";
import { AppShell, Header, MantineProvider, Text } from "@mantine/core";
import { FormInputProvider } from "../components/formInputProvider";

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Page title</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: "dark",
        }}
      >
        <AppShell
          padding="md"
          header={
            <Header height={60} p="xs">
              <Text fz="xl" fw={700} ta="center">
                Rozliczenia
              </Text>
            </Header>
          }
          styles={(theme) => ({
            main: {
              backgroundColor:
                theme.colorScheme === "dark"
                  ? theme.colors.dark[8]
                  : theme.colors.gray[0],
            },
          })}
        >
          <FormInputProvider>
            <Component {...pageProps} />
          </FormInputProvider>
        </AppShell>
      </MantineProvider>
    </>
  );
}
