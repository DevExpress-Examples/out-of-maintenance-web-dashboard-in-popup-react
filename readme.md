<!-- default badges list -->
![](https://img.shields.io/endpoint?url=https://codecentral.devexpress.com/api/v1/VersionRange/306154102/20.2.3%2B)
[![](https://img.shields.io/badge/Open_in_DevExpress_Support_Center-FF7200?style=flat-square&logo=DevExpress&logoColor=white)](https://supportcenter.devexpress.com/ticket/details/T942113)
[![](https://img.shields.io/badge/📖_How_to_use_DevExpress_Examples-e9f6fc?style=flat-square)](https://docs.devexpress.com/GeneralInformation/403183)
<!-- default badges end -->
<!-- default file list -->
*Files to look at*:

* [App.js](./dashboard-react-app/src/App.js)
<!-- default file list end -->

# Dashboard for React - How to display the Web Dashboard in a popup

This example illustrates how to use the React-based `DashboardControl` component to diplay a dashboard in the [DevExtreme Popup widget](https://js.devexpress.com/Documentation/ApiReference/UI_Widgets/dxPopup/).

![web-dashboard-react-popup](web-dashboard-react-popup.png)

The example uses a modular approach that based on the client-server model. You need a server (backend) project and a client (frontend) application that includes all the necessary styles, scripts and HTML-templates. Note that the script version on the client should match with libraries version on the server up to a minor version.

- The [asp-net-core-server](./asp-net-core-server/) folder contains an ASP.NET Core 3.1 Dashboard application.
- The [dashboard-react-app](./dashboard-react-app/) folder contains a client application.

## Quick Start

In the **asp-net-core-server** folder run the following command:

```
dotnet run
```

See the following section for information on how to install NuGet packages from the DevExpress NuGet feed: [Install DevExpress Controls Using NuGet Packages](https://docs.devexpress.com/GeneralInformation/115912/installation/install-devexpress-controls-using-nuget-packages).

> This server allows CORS requests from _all_ origins with _any_ scheme (http or https). It is insecure, because any website can make cross-origin requests to the app. We recommend you specify the client application's URL directly to prohibit clients from getting access to your personal information on your server. Learn more: [Cross-Origin Resource Sharing (CORS)](https://docs.devexpress.com/Dashboard/400709)

In the **dashboard-react-app** folder, run the following commands:

```
npm start
```

Open ```http://localhost:3000/``` in your browser to see the result.

## Documentation

- [Add Web Dashboard to a React Application](https://docs.devexpress.com/Dashboard/400683/web-dashboard/dashboard-component-for-react/add-web-dashboard-to-a-react-application)
- [Dashboard Component for React](https://docs.devexpress.com/Dashboard/401977/web-dashboard/dashboard-component-for-react)
- [Cross-Origin Resource Sharing (CORS)](https://docs.devexpress.com/Dashboard/400709)
- [Install DevExpress Controls Using NuGet Packages](https://docs.devexpress.com/GeneralInformation/115912/installation/install-devexpress-controls-using-nuget-packages)

## More Examples

- [Get Started - Client-Side Dashboard Application built with React](https://github.com/DevExpress-Examples/dashboard-react-app)
- [Dashboard for React - Configuration](https://github.com/DevExpress-Examples/dashboard-react-example)
- [Dashboard for Angular - How to display the Web Dashboard in a popup](https://github.com/DevExpress-Examples/web-dashboard-in-popup-angular)
