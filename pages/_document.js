import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head>
                <link
                    rel="shortcut icon"
                    type="image/x-icon"
                    href="/assets/images/favicon.png"
                />

                <link rel="stylesheet" href="/assets/css/vendor/bootstrap.min.css" />
                <link rel="stylesheet" href="/assets/css/vendor/slick.css" />
                <link rel="stylesheet" href="/assets/css/vendor/slick-theme.css" />
                <link rel="stylesheet" href="/assets/css/vendor/nice-select.css" />
                <link rel="stylesheet" href="/assets/css/plugins/feature.css" />
                <link rel="stylesheet" href="/assets/css/plugins/jquery-ui.min.css" />
                <link rel="stylesheet" href="/assets/css/vendor/odometer.css" />

                <link rel="stylesheet" href="/assets/css/style.css" />
            </Head>
            <body>
                <Main />

                <NextScript />


            </body>


        </Html>
    )
}