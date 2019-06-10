import { h, Component } from 'preact';
import { Link, Match } from 'preact-router/match';
import Drawer from 'preact-material-components/Drawer';
import TopAppBar from 'preact-material-components/TopAppBar';
import 'preact-material-components/Dialog/style.css';
import 'preact-material-components/TopAppBar/style.css';
import 'preact-material-components/Drawer/style.css';
import 'preact-material-components/List/style.css';
import IoLogo from '../io_logo';
import MenuIcon from '../SVG/Icons/menu';
import HomeIcon from '../SVG/Icons/home';
import RegistrationIcon from '../SVG/Icons/registration';
import FaqIcon from '../SVG/Icons/faq';
import CFPIcon from '../SVG/Icons/cpf';
import ScheduleIcon from '../SVG/Icons/schedule';
import style from './style';

export default class NavBar extends Component {
  closeDrawer = () => {
    this.setState({ drawerOpened: false });
  };

  openDrawer = () => {
    this.setState({ drawerOpened: !this.state.drawerOpened });
  };

  render({ rootPath }) {
    return (
      <div>
        <div class={style.toolbar}>
          <TopAppBar className="topappbar">
            <TopAppBar.Row>
              <TopAppBar.Section align-start>
                <MenuIcon class={style.menu_icon} onClick={this.openDrawer} />
              </TopAppBar.Section>
              <div class={style.mobile_title}>
                <Match path={rootPath + 'schedule'}>
                  {({ path }) => path.startsWith(rootPath + 'schedule') && <span>행사일정</span>}
                </Match>
                <Match path={rootPath + 'code-of-conduct'}>
                  {({ path }) =>
                    path.startsWith(rootPath + 'code-of-conduct') && <span>Code of Conduct</span>
                  }
                </Match>
                <Match path={rootPath + 'faq'}>
                  {({ path }) => path.startsWith(rootPath + 'faq') && <span>FAQ</span>}
                </Match>
              </div>
            </TopAppBar.Row>
          </TopAppBar>
        </div>
        <Drawer modal open={this.state.drawerOpened} onClose={this.closeDrawer}>
          <Drawer.DrawerContent>
            <div class={style.drawer_toolbar}>
              <IoLogo />
              <h2>2019년 6월 30일</h2>
              <p>세종대학교 광개토관</p>
            </div>
            <div class={style.drawer_nav}>
              <Link activeClassName={style.active} href={rootPath} onClick={this.closeDrawer}>
                Home
              </Link>
              <a href="https://festa.io/events/299" target="_blank">
                참가하기
              </a>
              <Match path="/schedule">
                {({ path, url }) => (
                  <Link
                    activeClassName={style.active}
                    href={rootPath + 'schedule'}
                    onClick={this.closeDrawer}
                    path={path.startsWith(`${rootPath}schedule/`) ? url : undefined}
                  >
                    행사일정
                  </Link>
                )}
              </Match>
              {/* <Match path="/faq">
                {({ path, url }) => (
                  <Link
                    activeClassName={style.active}
                    href={rootPath + 'faq'}
                    onClick={this.closeDrawer}
                    path={path.startsWith(`${rootPath}faq/`) ? url : undefined}
                  >
                    FAQ
                  </Link>
                )}
              </Match> */}
            </div>
          </Drawer.DrawerContent>
        </Drawer>
        <div class={style.navbar}>
          <div class={style.hamburger}>
            <MenuIcon class={style.menu_icon} onClick={this.openDrawer} />
          </div>
          <nav>
            <Link activeClassName={style.active} class={style.nav_item} href={rootPath}>
              <HomeIcon />
              <span>Home</span>
            </Link>
            <a class={style.nav_item} href="https://festa.io/events/299" target="_blank">
              <RegistrationIcon />
              <span>참가하기</span>
            </a>
            <Match path="/schedule">
              {({ path, url }) => (
                <Link
                  activeClassName={style.active}
                  class={style.nav_item}
                  href={rootPath + 'schedule'}
                  path={path.startsWith(`${rootPath}schedule/`) ? url : undefined}
                >
                  <ScheduleIcon />
                  <span>행사일정</span>
                </Link>
              )}
            </Match>
            {/* <Match path="/faq">
              {({ path, url }) => (
                <Link
                  activeClassName={style.active}
                  class={style.nav_item}
                  href={rootPath + 'faq'}
                  path={path.startsWith(`${rootPath}faq/`) ? url : undefined}
                >
                  <FaqIcon />
                  <span>FAQ</span>
                </Link>
              )}
            </Match> */}
            <div class={style.line} />
          </nav>
        </div>
      </div>
    );
  }
}
