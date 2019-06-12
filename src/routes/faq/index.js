import { h, Component } from 'preact';
import IoLogo from '../../components/io_logo';
import SocialFooter from '../../components/social_footer';
import Footer from '../../components/footer';
import style from './style';
import { Link } from 'preact-router';

export default class Faq extends Component {
  handleScroll() {
    const ele = document.querySelector('.topappbar.mdc-top-app-bar');
    if (document.documentElement.scrollTop < 56) {
      ele.setAttribute('top', true);
    } else {
      ele.removeAttribute('top');
    }
  }

  componentDidMount() {
    document.title = 'FAQ - I/O Extended 2019 Seoul';
    window.addEventListener('scroll', this.handleScroll, { passive: true });
    this.handleScroll();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    document.querySelector('.topappbar.mdc-top-app-bar').removeAttribute('top');
  }

  render({ rootPath }) {
    return (
      <div>
        <div class="hero">
          <IoLogo rootPath={rootPath} />
          <h2>FAQ</h2>
        </div>
        <div class={style.faq}>
          <div class={style.faq_item}>
            <div class={style.faq_title}>일반</div>
            <div class={style.faq_content}>
              <p>
                <b>일정</b>
              </p>
              <p>
                I/O Extended 2019 Seoul은 6월 30일 오전 11시부터 오후 5시 30분까지 진행됩니다.
                구체적인 일정은 <Link href={rootPath + 'schedule'}>행사일정</Link> 페이지를
                참고해주세요!
              </p>
              <br />
              <p>
                <b>장소</b>
              </p>
              <p>
                행사 장소는 세종대학교 광개토관 지하 2층 컨벤션 홀입니다. 주차지원이 되지 않습니다.
                가급적 대중교통을 이용해주시기 바랍니다. 지하철을 이용하시는 경우, 7호선
                어린이대공원 역에서 하차하셔서 6번 출구로 나오신 후, 세종대학교 광개토관까지 도보로
                이동하시면 됩니다.
              </p>
            </div>
          </div>
        </div>
        <div class={style.faq}>
          <div class={style.faq_item}>
            <div class={style.faq_title}>등록</div>
            <div class={style.faq_content}>
              <p>
                <b>환불 및 양도</b>
              </p>
              <ul>
                <li>
                  티켓 환불은{' '}
                  <a href="https://festa.io/my/tickets" target="_blank">
                    Festa '내 티켓'
                  </a>{' '}
                  메뉴에서 티켓 판매기간 동안에만 구입한 티켓의 환불 신청이 가능합니다.
                </li>
                <li>
                  No-Show 는 다른 참석자에게 해가 됩니다. 티켓 구매 후 참여가 힘들게 된다면 환불
                  기간 내에 환불 바랍니다.
                </li>
                <li>
                  환불 기간 내에 환불을 못하셨다면 QR코드 전달 등으로 타인에게 양도할 수 있습니다.
                </li>
                <li>환불 마감일은 6월 26일에서 27일로 넘어가는 자정(27일 00시)입니다.</li>
              </ul>
            </div>
          </div>
        </div>
        <div class={style.faq}>
          <div class={style.faq_item}>
            <div class={style.faq_title}>기타</div>
            <div class={style.faq_content}>
              <p>
                <b>주차</b>
              </p>
              <p>주차 지원이 되지 않습니다. 대중교통을 이용해주시기 바랍니다.</p>
              <br />
              <p>
                <b>인터넷</b>
              </p>
              <p>행사장 내 와이파이가 제공됩니다.</p>
              <br />
              <p>
                <b>식음료</b>
              </p>
              <p>행사 내 식사는 제공되지 않으며, 간단한 간식과 물이 제공될 예정입니다.</p>
              <br />
              <p>
                <b>흡연</b>
              </p>
              <p>행사장 전 구역에서 흡연은 금지되어있습니다.</p>
              <br />
              <p>
                <b>발표자료</b>
              </p>
              <p>일부 발표자에 한해 발표자료가 공개될 예정입니다.</p>
              <br />
              <p>
                <b>문의</b>
              </p>
              <p>
                기타 행사 관련 문의는{' '}
                <a href="mailto:io-extended-2019-seoul@googlegroups.com">
                  io-extended-2019-seoul@googlegroups.com
                </a>
                으로 메일 주시면 빠르게 답변드리도록 하겠습니다.
              </p>
            </div>
          </div>
        </div>
        <SocialFooter rootPath={rootPath} />
        <Footer rootPath={rootPath} />
      </div>
    );
  }
}
