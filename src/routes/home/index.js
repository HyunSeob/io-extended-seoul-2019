import { Component } from 'preact';
import IoLogo from '../../components/io_logo';
import SocialFooter from '../../components/social_footer';
import Footer from '../../components/footer';
import GalleryBlock from '../../components/gallery_block';
import Countdown from '../../components/Countdown';
import style from './style';

export default class Home extends Component {
  handleScroll() {
    const ele = document.querySelector('.topappbar.mdc-top-app-bar');
    if (document.documentElement.scrollTop < 56) {
      ele.setAttribute('top', true);
    } else {
      ele.removeAttribute('top');
    }
  }

  componentDidMount() {
    document.title = 'I/O Extended 2019 Seoul';
    window.addEventListener('scroll', this.handleScroll, { passive: true });
    this.handleScroll();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    document.querySelector('.topappbar.mdc-top-app-bar').removeAttribute('top');
  }

  render({ rootPath, partners }) {
    return (
      <div>
        <div class={`${style.hero} hero`}>
          <div class={style.hero_title}>
            <IoLogo rootPath={rootPath} />
            <h2>
              I/O Extended는 전세계 각 지역에서 Google I/O의 경험과 새로 공개된 정보들을 공유하는
              행사입니다.
              <br />
              I/O Extended 2019 Seoul에 참가해 뜨거웠던 현장의 열기를 다시 느껴보세요.
            </h2>
            <br />
            <h4 style={{ marginBottom: '12px' }}>2019년 6월 30일 · 세종대학교 광개토관</h4>
            <a
              class="ctaButton"
              href="https://festa.io/events/299"
              target="_blank"
              rel="noopener noreferrer"
            >
              등록하기
            </a>
          </div>
          <Countdown />
        </div>
        <div class={`${style.belt} belt`}>
          <img src="/assets/images/intro.jpg" alt="I/O Extended 2018 Seoul 키노트" />
        </div>
        <div class={style.home_info}>
          <div class={style.text}>
            <h3>직접 체험하세요.</h3>
            <p>
              I/O Extended 2019 Seoul에서는 Google I/O 2019에서 발표된 내용 중 핵심만 선별하여
              여러분과 나누는 시간을 가지려 합니다. Android 부터 AI/ML, Web, Cloud, Flutter,
              Design까지 다양한 주제의 세션이 준비되어 있습니다.
            </p>
          </div>
          <div class={style.stats}>
            <div class={style.stat}>
              <div class={style.number}>1000+</div>
              <div class={style.label}>Attendees</div>
            </div>
            <div class={style.stat}>
              <div class={style.number}>1</div>
              <div class={style.label}>Day</div>
            </div>
          </div>
        </div>
        <GalleryBlock />
        <div class={style.partners}>
          <h3>Partners</h3>
          <div>
            <h4>후원</h4>
            <div class={style.sponsors}>
              <a
                class={style.item}
                href="https://developers.google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/assets/images/google-developers.png" alt="Google Developers" />
              </a>
              <a
                class={style.item}
                href="http://cracker9.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/assets/images/cracker9.png" alt="Cracker 9" />
              </a>
              <a
                class={style.item}
                href="https://bitberry.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/assets/images/bitberry.png" alt="비트베리" />
              </a>
              <a
                class={style.item}
                href="https://www.myrealtrip.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/assets/images/myrealtrip.png" alt="마이리얼트립" />
              </a>
            </div>
          </div>
          <div>
            <h4>주최</h4>
            <div class={style.sponsors}>
              <a
                class={style.item}
                href="https://www.facebook.com/groups/gdgseoul/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/assets/images/gdg-seoul-logo.png" alt="GDG Seoul" />
              </a>
            </div>
          </div>
        </div>
        <SocialFooter rootPath={rootPath} />
        <Footer rootPath={rootPath} />
      </div>
    );
  }
}
