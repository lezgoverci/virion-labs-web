import styles from './test-component.module.scss';

export function TestComponent(){
    return <div className={[styles.active, styles.tailwind, "font-bold", "italic"].join(' ')}>Test Component</div>
}