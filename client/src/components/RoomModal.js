import styles from './RoomModal.module.css';

function RoomModal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()} /* 모달 내부 클릭 시 닫히지 않도록 설정 */>
        <button className={styles.closeButton} onClick={onClose}>
          X
        </button>
        {children}
      </div>
    </div>
  );
}

export default RoomModal;
