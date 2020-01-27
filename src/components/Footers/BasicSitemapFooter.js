import React, { useRef } from 'react'
import '../../css/main.css'

// Sitemap is
// {
//   [
//     {
//       title: title,
//       url: url
//     }
//   ],
//   [{
//     title: title,
//     url: url
//   }]
// }

// <ul>
//   <li><a href="#" class="footer-links">Store</a></li>
//   <li><a href="#" class="footer-links">Sales</a></li>
//   </ul>
//     <ul>
//   <li><a href="#" class="footer-links">Facebook</a</li>
//   <li><a href="#" class="footer-links">Twitter</a></li>
//   <li><a href="#" class="footer-links">Instagram</a></li>
//   </ul>
//     <ul>
//   <li><a href="#" class="footer-links">About Us</a></li>
//   </ul>

const BasicSitemapFooter = (props) => {
  return (
    <div id="footer">
      <div id="sitemap">
        {
          props.sitemap.forEach(link => {
              <li><a href={ link.url } class="footer-links">{ link.title }</a></li>
            })
        }
        <img src="#" class="footer-logo"/>
        </div>
    </div>
  );
}

export {  BasicSitemapFooter }
