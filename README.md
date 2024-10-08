**React Dashboard Application**
This React Dashboard Application provides a navigation sidebar and various data visualization components. Below is a detailed explanation of the components and their functionalities.

**Project Structure****
    src/: Contains all source files.
    components/: Reusable React components.
    Sidebar.js: Sidebar component with dropdown menus and active link highlighting.
    Dashboard.js: Main dashboard component with charts.
    Inventory.js: Component for the Inventory section.
    Order.js: Component for the Order section.
    Returns.js: Component for the Returns section.
    Customers.js: Component for the Customers section.
    Shipping.js: Component for the Shipping section.
    Integrations.js: Component for the Integrations section.
    Channel.js: Component for the Channels section.
    App.js: Main application file with routing setup.
    App.css: Main styling file.
**Features**
    Sidebar Navigation: Provides links to different sections with dropdowns for additional options.
    Dynamic Routing: Utilizes React Router for navigating between different components.
    Charts: Includes line and pie charts for data visualization in the Dashboard component.
    Dropdown Menus: Sidebar includes collapsible dropdowns for Calculators, Reports, and Account sections.
**Components**
  **App Component**
    **src/App.js**
      The App component sets up the routing for the application and integrates the Sidebar and various section components.
      for routings use react-router-dom, to use react routings install react-router-dom by using command:
            **npm install react-router-dom**
  **Sidebar Component**
    **src/components/Sidebar.js**
      The Sidebar component includes navigation links with active link highlighting and dropdown menus for additional options. It utilizes React Router’s Link for navigation and     useLocation to manage the active state.

**Dashboard Component**
  **src/components/Dashboard.js**
    The Dashboard component features a line chart and a pie chart for visualizing data. It uses react-chartjs-2 and chart.js for rendering charts.
    The Dashboard component displays data through visualizations:
        Line Chart: Shows trends in orders and sales over time with different y-axes for each dataset.
        Pie Chart: Illustrates the distribution of sales between different stores.
    to use charts install react-chartjs-2 and chart.js using below command:
        **npm install react-chartjs-2 chart.js**

**Styling**
  App.css: Contains the main styling for the overall layout of the application.
  Sidebar.css: Styles the sidebar, including active link highlighting and dropdown menus.
  style.css: Applies styles to the charts in the Dashboard component.
**Usage**
**To run the application:**
  Start the development server using npm start.
  Open your browser and go to http://localhost:3000 to view the application.
  Use the sidebar to navigate between different sections and interact with the charts.


      
