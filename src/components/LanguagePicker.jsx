import styles from './LanguagePicker.module.css'

function LanguagePicker({language, setLanguage}) {
  const languages = ['EN','ES'];

  return (
      <div className={styles.languagePicker}>
        {languages.map((lang) => (
            <button
                key={lang}
                onClick={() => setLanguage(lang)}
                className={lang === language ? styles.activeLanguageButton : ''}
            >
              {lang}
            </button>
        ))}
      </div>
  )
}

export default LanguagePicker;