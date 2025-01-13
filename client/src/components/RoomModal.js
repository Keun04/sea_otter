import styles from './RoomModal.module.css';

function RoomModal({ isOpen, onClose, children, type }) {
  if (!isOpen) return null;

  const containerClass = `${styles.modal} ${styles[type] || ''}`;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={containerClass} onClick={(e) => e.stopPropagation()} /* 모달 내부 클릭 시 닫히지 않도록 설정 */>
        <button className={styles.closeButton} onClick={onClose}>
          X
        </button>
        {children}
      </div>
    </div>
  );
}

export default RoomModal;
