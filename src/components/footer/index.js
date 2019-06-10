import { Component } from 'preact';
import style from './style';

export default class Footer extends Component {
  render({ rootPath }) {
    return (
      <div class={style.footer}>
        <div class={style.footer_logo}>
          <img alt="GDG Seoul Logo" src="/assets/images/gdg-seoul-logo.png" />
        </div>
        <div class={style.footer_links}>
          <div class={style.footer_link}>
            <a href="https://festa.io/events/299" target="_blank">
              참가하기
            </a>
            <a href={rootPath + 'scehdule'}>행사일정</a>
            {/* <a href={rootPath + 'code-of-conduct'}>Code of Conduct</a> */}
            {/* <a href={rootPath + 'faq'}>FAQ</a> */}
            <a href="https://io-extended-seoul-18.firebaseapp.com/" target="_blank">
              I/O Extended Seoul 2018
            </a>
          </div>
        </div>
      </div>
    );
  }
}
