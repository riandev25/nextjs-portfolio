import styles from './index.module.css';

const Keyboard = () => {
  return (
    <div className={`${styles.case} scale-75`}>
      {/* <!-- First row --> */}
      <div className={styles.key} data-key='escape'>
        es
      </div>
      <div className={`${styles.key} ${styles.active}`} data-key='1'></div>
      <div className={styles.key} data-key='2'></div>
      <div className={styles.key} data-key='3'></div>
      <div className={styles.key} data-key='4'></div>
      <div className={styles.key} data-key='5'></div>
      <div className={styles.key} data-key='6'></div>
      <div className={styles.key} data-key='7'></div>
      <div className={styles.key} data-key='8'></div>
      <div className={styles.key} data-key='9'></div>
      <div className={styles.key} data-key='0'></div>
      <div className={styles.key} data-key='-'></div>
      <div className={styles.key} data-key='='></div>
      <div className={`${styles.key} ${styles.xxl}`} data-key='backspace'></div>
      <div className={styles.key}></div>
      <div className={styles.key}></div>
      {/* <!-- Second row --> */}
      <div className={`${styles.key} ${styles.large}`} data-key='tab'></div>
      <div className={styles.key} data-key='q'></div>
      <div className={styles.key} data-key='w'></div>
      <div className={styles.key} data-key='e'></div>
      <div className={styles.key} data-key='r'></div>
      <div className={styles.key} data-key='t'></div>
      <div className={styles.key} data-key='y'></div>
      <div className={styles.key} data-key='u'></div>
      <div className={styles.key} data-key='i'></div>
      <div className={styles.key} data-key='o'></div>
      <div className={styles.key} data-key='p'></div>
      <div className={styles.key} data-key='['></div>
      <div className={styles.key} data-key=']'></div>
      <div className={`${styles.key} ${styles.large}`} data-key='\'></div>
      <div className={styles.key}></div>
      <div className={styles.key}></div>
      {/* <!-- Third row --> */}
      <div className={`${styles.key} ${styles.xl}`} data-key='capslock'>
        caps
      </div>
      <div className={styles.key} data-key='a'></div>
      <div className={styles.key} data-key='s'></div>
      <div className={styles.key} data-key='d'></div>
      <div className={styles.key} data-key='f'></div>
      <div className={styles.key} data-key='g'></div>
      <div className={styles.key} data-key='h'></div>
      <div className={styles.key} data-key='j'></div>
      <div className={styles.key} data-key='k'></div>
      <div className={styles.key} data-key='l'></div>
      <div className={styles.key} data-key=';'></div>
      <div className={styles.key} data-key="'"></div>
      <div className={`${styles.key} ${styles.xl}`} data-key='enter'>
        return
      </div>
      <div className={styles.key}></div>
      <div className={styles.key}></div>
      {/* <!-- Fourth row --> */}
      <div className={`${styles.key} ${styles.xxl}`} data-key='shiftleft'>
        shift
      </div>
      <div className={styles.key} data-key='z'></div>
      <div className={styles.key} data-key='x'></div>
      <div className={styles.key} data-key='c'></div>
      <div className={styles.key} data-key='v'></div>
      <div className={styles.key} data-key='b'></div>
      <div className={styles.key} data-key='n'></div>
      <div className={styles.key} data-key='m'></div>
      <div className={styles.key} data-key=','></div>
      <div className={styles.key} data-key='.'></div>
      <div className={styles.key} data-key='/'></div>
      <div className={`${styles.key} ${styles.xxl}`} data-key='shiftright'>
        shift
      </div>
      <div className={styles.key} data-key='arrowup'>
        ▲
      </div>
      <div className={styles.key}></div>
      {/* <!-- Fifth row --> */}
      <div className={`${styles.key} ${styles.medium}`} data-key='controlleft'>
        ctrl
      </div>
      <div className={`${styles.key} ${styles.medium}`} data-key='meta'>
        win
      </div>
      <div className={`${styles.key} ${styles.medium}`} data-key='altleft'>
        alt
      </div>
      <div className={`${styles.key} ${styles.huge}`} data-key=' '></div>
      <div className={`${styles.key} ${styles.medium}`} data-key='altright'>
        alt
      </div>
      <div className={`${styles.key} ${styles.medium}`} data-key='fn'></div>
      <div className={`${styles.key} ${styles.medium}`} data-key='controlright'>
        ctrl
      </div>
      <div className={styles.key} data-key='arrowleft'>
        ◀
      </div>
      <div className={styles.key} data-key='arrowdown'>
        ▼
      </div>
      <div className={styles.key} data-key='arrowright'>
        ▶
      </div>
    </div>
  );
};

export default Keyboard;
