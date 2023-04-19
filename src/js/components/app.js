import { loadingImg } from "./loadingImg/loadingImg";
import { smoothHeader } from "./smoothHeader/smoothHeader";
import {example} from "./shared/import";
import Tabs from "./tabs/tabs";
import dropdownLink from "./dropdown/dropdownLink";
import { accordion } from "./accordion/accordion";

document.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM fully loaded and parsed');
  example()
  loadingImg()
  smoothHeader()
  Tabs()
  dropdownLink()
  accordion()
});

