import styles from './index.module.css';

const Keyboard = () => {
  return (
    <div className={`${styles.case} scale-78`}>
      {/* <!-- First row --> */}
      <div className={styles.key} data-id='escape'>
        es
      </div>
      <div className={`${styles.key} ${styles.active}`} data-id='1'></div>
      <div className={styles.key} data-id='2'></div>
      <div className={styles.key} data-id='3'></div>
      <div className={styles.key} data-id='4'></div>
      <div className={styles.key} data-id='5'></div>
      <div className={styles.key} data-id='6'></div>
      <div className={styles.key} data-id='7'></div>
      <div className={styles.key} data-id='8'></div>
      <div className={styles.key} data-id='9'></div>
      <div className={styles.key} data-id='0'></div>
      <div className={styles.key} data-id='-'></div>
      <div className={styles.key} data-id='='></div>
      <div className={`${styles.key} ${styles.xxl}`} data-id='backspace'></div>
      <div className={styles.key}></div>
      <div className={styles.key}></div>
      {/* <!-- Second row --> */}
      <div className={`${styles.key} ${styles.large}`} data-id='tab'></div>
      <div className={styles.key} data-id='q'></div>
      <div className={styles.key} data-id='w'></div>
      <div className={styles.key} data-id='e'></div>
      <div className={styles.key} data-id='r'></div>
      <div className={styles.key} data-id='t'></div>
      <div className={styles.key} data-id='y'></div>
      <div className={styles.key} data-id='u'></div>
      <div className={styles.key} data-id='i'></div>
      <div className={styles.key} data-id='o'></div>
      <div className={styles.key} data-id='p'></div>
      <div className={styles.key} data-id='['></div>
      <div className={styles.key} data-id=']'></div>
      <div className={`${styles.key} ${styles.large}`} data-id='\'></div>
      <div className={styles.key}></div>
      <div className={styles.key}></div>
      {/* <!-- Third row --> */}
      <div className={`${styles.key} ${styles.xl}`} data-id='capslock'>
        caps
      </div>
      <div className={styles.key} data-id='a'></div>
      <div className={styles.key} data-id='s'></div>
      <div className={styles.key} data-id='d'></div>
      <div className={styles.key} data-id='f'></div>
      <div className={styles.key} data-id='g'></div>
      <div className={styles.key} data-id='h'></div>
      <div className={styles.key} data-id='j'></div>
      <div className={styles.key} data-id='k'></div>
      <div className={styles.key} data-id='l'></div>
      <div className={styles.key} data-id=';'></div>
      <div className={styles.key} data-id="'"></div>
      <div className={`${styles.key} ${styles.xl}`} data-id='enter'>
        Enter
      </div>
      <div className={styles.key}></div>
      <div className={styles.key}></div>
      {/* <!-- Fourth row --> */}
      <div className={`${styles.key} ${styles.xxl}`} data-id='shiftleft'>
        shift
      </div>
      <div className={styles.key} data-id='z'></div>
      <div className={styles.key} data-id='x'></div>
      <div className={styles.key} data-id='c'></div>
      <div className={styles.key} data-id='v'></div>
      <div className={styles.key} data-id='b'></div>
      <div className={styles.key} data-id='n'></div>
      <div className={styles.key} data-id='m'></div>
      <div className={styles.key} data-id=','></div>
      <div className={styles.key} data-id='.'></div>
      <div className={styles.key} data-id='/'></div>
      <div className={`${styles.key} ${styles.xxl}`} data-id='shiftright'>
        shift
      </div>
      <div className={styles.key} data-id='arrowup'>
        ▲
      </div>
      <div className={styles.key}></div>
      {/* <!-- Fifth row --> */}
      <div className={`${styles.key} ${styles.medium}`} data-id='controlleft'>
        ctrl
      </div>
      <div className={`${styles.key} ${styles.medium}`} data-id='meta'>
        win
      </div>
      <div className={`${styles.key} ${styles.medium}`} data-id='altleft'>
        alt
      </div>
      <div className={`${styles.key} ${styles.huge}`} data-id=' '></div>
      <div className={`${styles.key} ${styles.medium}`} data-id='altright'>
        alt
      </div>
      <div className={`${styles.key} ${styles.medium}`} data-id='fn'></div>
      <div className={`${styles.key} ${styles.medium}`} data-id='controlright'>
        ctrl
      </div>
      <div className={styles.key} data-id='arrowleft'>
        ◀
      </div>
      <div className={styles.key} data-id='arrowdown'>
        ▼
      </div>
      <div className={styles.key} data-id='arrowright'>
        ▶
      </div>
    </div>
  );
};

export default Keyboard;
