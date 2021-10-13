
import s from "./Dialogs.module.css";


const Dialogs = () => {
    return (
        <div className={s.dialogs} >
            <div className={s.dialogs__dialogsItems}>
                <div className={s.dialog__item}>
                    Andrey
                </div>
                <div className={s.dialog__item}>
                    Max
                </div>
                <div className={s.dialog__item}>
                    Sergiy
                </div>
            </div>
            <div className={s.dialogs__messages}>
                <div className={s.dialogs__message}>Hi</div>
                <div className={s.dialogs__message}>How are you</div>
                <div className={s.dialogs__message}>I`m fine</div>
                <div className={s.dialogs__message}>And you</div>
            </div>
        </div>
    );
}

export default Dialogs;