// import Document, { Html, Head, Main, NextScript } from 'next/document';

// class MyDocument extends Document {
//   render() {
//     return (
//       <Html>
//         <Head>
//           {/* Google Tag Manager */}
//           <script
//             dangerouslySetInnerHTML={{
//               __html: `
//                 (function(w,d,s,l,i) {
//                   w[l]=w[l]||[];
//                   w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
//                   var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
//                   j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
//                 })(window,document,'script','dataLayer','GTM-52QVBZ57');
//               `,
//             }}
//           />
//           {/* End Google Tag Manager */}
//           {/* Cookie Consent by TermsFeed */}
//           <script
//             src="https://www.termsfeed.com/public/cookie-consent/4.1.0/cookie-consent.js"
//             type="text/javascript"
//             charSet="UTF-8"
//           />
//           <script
//             type="text/javascript"
//             charSet="UTF-8"
//             dangerouslySetInnerHTML={{
//               __html: `
//                 document.addEventListener('DOMContentLoaded', function () {
//                   cookieconsent.run({
//                     "notice_banner_type": "standalone",
//                     "consent_type": "express",
//                     "palette": "light",
//                     "language": "en",
//                     "page_load_consent_levels": ["strictly-necessary"],
//                     "notice_banner_reject_button_hide": false,
//                     "preferences_center_close_button_hide": false,
//                     "page_refresh_confirmation_buttons": false,
//                     "website_name": "Ideato"
//                   });
//                 });
//               `,
//             }}
//           />
//           {/* Google Analytics */}
//           {/* Google Tag Manager */}
//           <script
//             type="text/plain"
//             data-cookie-consent="tracking"
//             dangerouslySetInnerHTML={{
//               __html: `
//                 (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
//                 new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
//                 j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
//                 'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
//                 })(window,document,'script','dataLayer','GTM-XYZ');
//               `,
//             }}
//           />
//           {/* End Google Tag Manager */}
//           {/* end of Google Analytics */}
//           <noscript>
//             Free cookie consent management tool by <a href="https://www.termsfeed.com/">TermsFeed</a>
//           </noscript>
//           {/* End Cookie Consent by TermsFeed */}
//           {/* Below is the link that users can use to open Preferences Center to change their preferences. Do not modify the ID parameter. Place it where appropriate, style it as needed. */}
//           <a href="#" id="open_preferences_center">Update cookies preferences</a>
//         </Head>
//         <body>
//           {/* Google Tag Manager (noscript) */}
//           <noscript>
//             <iframe
//               src="https://www.googletagmanager.com/ns.html?id=GTM-52QVBZ57"
//               height="0"
//               width="0"
//               style={{ display: "none", visibility: "hidden" }}
//             ></iframe>
//           </noscript>
//           {/* End Google Tag Manager (noscript) */}
//           <Main />
//           <NextScript />
//         </body>
//       </Html>
//     );
//   }
// }

// export default MyDocument;