// F7 Class
import Swiper from './components/core/core-class';

// Core Modules
import Device from './modules/device/device';
import Support from './modules/support/support';
import Browser from './modules/browser/browser';
import Resize from './modules/resize/resize';
import Observer from './modules/observer/observer';

//IMPORT_COMPONENTS

// Install Modules & Components
Swiper
  // Core Modules
  .use(Device)
  .use(Support)
  .use(Browser)
  .use(Resize)
  .use(Observer)
  //INSTALL_COMPONENTS

//EXPORT
