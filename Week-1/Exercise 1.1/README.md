# How does the browser work?

A browser is an application that enables users to access and interact with web pages on the internet. The primary function of a browser is to request web pages from servers and display them to users. Browsers use a combination of networking protocols, rendering engines, parsers, and scripting engines to accomplish this task.

### Step-by-Step Working of Browser

Whenever you click on a link or enter a URL, the browser sends and receives information or data to and from other parts of the web. The information it receives is rendered by the rendering engine and translated into an easily understandable format. It is then displayed in the user interface.

It involves a multi-step process including DNS resolution, HTTP exchange between browser and web server, rendering, and so on, as follows:

![Working](browserworks.png)

- You enter a URL in the web browser.
- The browser finds the IP address for the domain using DNS.
- The browser initiates a connection with the server.
- Next, it sends an HTTP request to the web server.
- The server handles the request and sends out an HTTP response.
- The browser renders and displays the HTML content, i.e., the web page.

### Common Terms Around Browsers

Below are the commonly used jargons that you might've read above or come across while reading about the internet, web, or browsers.

- **URL** – Universal Resource Locator is the address of a given unique resource on the Web.
- **HTML** – HTML stands for HyperText Markup Language, used for creating web pages and applications.
- **HTTP** – HTTP is a protocol that allows the fetching of resources, like HTML documents. It is a client-server protocol, which means your web browser initiates requests.
- **IP Address** – It identifies the location of a specific server that's connected to the internet. Each website has its own unique IP address and can have multiple IP addresses when hosted at multiple locations. For example, a common IP address for Facebook is 157.240.241.35.
- **DNS** – DNS or Domain Name System is the database that contains records of the domains. It helps discover websites using human-readable addresses.
- **Cookies** – Cookies are the small pieces of data websites store on your device's storage.

![process](process.png)

**a) What is the main functionality of the browser?**

The main functionality of a browser is to allow users to access and view content on the World Wide Web. Browsers accomplish this by retrieving and displaying web pages, which are written in HTML, and the associated resources such as images, videos, and stylesheets.

Additionally, browsers provide a range of other features, such as

**Navigation** : allowing users to move between different pages on the web using hyperlinks or the browser's back and forward buttons.

**Bookmarking** : allowing users to save links to their favorite websites for easy access.

**Search** : providing a search bar to help users find information on the web.

**Tabbed browsing:** allowing users to have multiple web pages open in separate tabs within the same browser window.

**Privacy and security:** providing features such as private browsing and built-in protection against malicious websites and online tracking.

**Extensions:** allowing users to add additional features and functionality to their browsers through third-party extensions or add-ons.

Overall, the main goal of a browser is to provide a user-friendly interface for accessing and interacting with the vast array of information and resources available on the web.

**b) High-level Components of a Browser?**

![Components](webComponents.png)

**User Interface (UI):** The user interface of a browser includes the elements that allow users to interact with the browser, such as the address bar, bookmarks, back and forward buttons, and various menus and settings.

**Browser Engine:** It is a core component of every web browser. The browser engine functions as an intermediary or a bridge between the user interface and the rendering engine. It queries and handles the rendering engine as per the inputs received from the user interface.

**Rendering Engine:** The rendering engine is responsible for displaying web content, including HTML, CSS, and JavaScript, on the user's screen. Different browsers may use different rendering engines, such as Blink (used by Chrome and Opera), Gecko (used by Firefox), or WebKit (used by Safari).

**JavaScript Interpreter:** JavaScript is a programming language that allows web developers to create dynamic and interactive web pages. The JavaScript interpreter is responsible for executing JavaScript code in the browser.

**Networking Stack** : The networking stack is responsible for handling the communication between the browser and the web server. This includes establishing and managing network connections, handling HTTP requests and responses, and caching data to improve performance.

**UI Backend:** This component uses the user interface methods of the underlying operating system. It is mainly used for drawing basic widgets (windows and combo boxes).

**Data Storage** : The browser needs to store data such as cookies, cache files, and browsing history. This data can be stored on the user's computer, or in some cases, in the cloud.

**c) Rendering engine and its use**

![render](rendering.png)

Parsing and interpreting HTML and CSS code to generate the Document Object Model (DOM) and the CSS Object Model (CSSOM), respectively.

Combining the DOM and CSSOM to create a Render Tree, which represents the visual elements of the web page.

Laying out the Render Tree to determine the size, position, and style of each element on the web page.

Painting the final image of the web page on the screen, including applying any animations or visual effects.

**d) Parsers (HTML, CSS, etc)?**

Parsers are software components that are responsible for analyzing and interpreting code written in specific markup or programming languages. In the context of web development, there are several different parsers that are commonly used, including HTML parsers, CSS parsers, and JavaScript parsers.

![parser](parser.png)

**HTML Parser:**

An HTML parser is a software component that is responsible for analyzing HTML code and generating a Document Object Model (DOM) that represents the structure of the web page. The HTML parser reads the HTML code character by character, identifies the various tags and elements in the code, and then creates the corresponding DOM nodes. The HTML parser can also handle errors and invalid code, by attempting to correct the code or by reporting errors to the developer.

**CSS Parser:**

A CSS parser is a software component that is responsible for analyzing CSS code and generating a CSS Object Model (CSSOM) that represents the style rules for the web page. The CSS parser reads the CSS code character by character, identifies the various selectors and properties in the code, and then creates the corresponding CSSOM rules. The CSS parser can also handle errors and invalid code, by attempting to correct the code or by reporting errors to the developer.

**JavaScript Parser:**

A JavaScript parser is a software component that is responsible for analyzing JavaScript code and generating an Abstract Syntax Tree (AST) that represents the structure and content of the code. The JavaScript parser reads the JavaScript code character by character, identifies the various statements and expressions in the code, and then creates the corresponding nodes in the AST. The JavaScript parser can also handle errors and invalid code, by attempting to correct the code or by reporting errors to the developer.

Overall, parsers are critical components of the web development process, as they enable developers to create and manipulate web content using markup and programming languages.

**e) Script Processors**

Script processors are responsible for executing scripts embedded in web pages.

Some guidelines for script processors are:

- Avoid using blocking script or synchronous XMLHttpRequests, as they can cause the page to freeze and become unresponsive.
- Use the latest version of the script processor to ensure compatibility with the latest web standards.
- Consider using a Content Security Policy (CSP) to control which scripts can run on your website, and prevent cross-site scripting attacks.

**f) Tree Construction**

Tree construction is the process of converting HTML code into a DOM tree.

Some guidelines for tree construction are:

- Use valid HTML code to ensure that the tree is constructed correctly.
- Avoid using deprecated HTML elements and attributes, as they may not be supported by modern browsers.
- Use semantic HTML elements to make the tree structure more meaningful and accessible.

**g) Order of Script Processing**

Scripts can affect the order in which page elements are displayed.

Some guidelines for the order of script processing are:

- Place scripts at the end of the body tag to ensure that the page content is displayed before scripts are executed.
- Use asynchronous script loading to prevent scripts from blocking the page rendering process.
- Consider using defer attribute on script tags that don't need to be executed immediately, and only execute after the page has finished parsing.

**h) Layout and Painting**

Layout and painting are the processes of calculating the position and size of page elements and rendering them on the screen.

Some guidelines for layout and painting are:

- Minimize the number of layout recalculations by avoiding changes to element dimensions, position, or visibility when the page is already rendered.
- Use CSS for layout and styling, as it is more efficient than manipulating element styles with JavaScript.
- Avoid using complex CSS selectors and unnecessary styling, as they can increase the rendering time.

By following these guidelines, you can improve the performance and usability of your web pages.