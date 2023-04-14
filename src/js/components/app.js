import { loadingImg } from "./loadingImg/loadingImg";
import { smoothHeader } from "./smoothHeader/smoothHeader";
import {example} from "./shared/import";

document.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM fully loaded and parsed');
  example()
  loadingImg()
  smoothHeader()
});

