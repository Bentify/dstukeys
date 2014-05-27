var locale = {};

locale.ua = {
    dnd_0: "Перетягніть файл ключа сюди",
    dnd_1: "Теперь перетягніть файл сертифікату",
    intro_1: ("Щоб накласти на документ електронний підпис, перетягніть на сторінку файл ключа, який вам видали у Центрі Сертифікації. Зазвичай, чей файл має ім\`я \"key_6.dat\", та є прихованим на флешці. Після цього, ви можете зберегти ключ у локальне сховище браузеру."),

    add_sign: "Накласти підпис на документ",
    to_store: "Зберегти у свовище",
    avail_certs: "Доступні сертифікати",
    crypted_key: "Секретний ключ захищений паролем. Введіть пароль у поле",
    crypted_key_0: "Секретний ключ захищений паролем.",
    crypted_key_1: "Введіть пароль у поле",
    label_decrypt: "Розшифрувати",
    identity_t: "%1 зареєстрован у %2 та ідентифікується податковим номером %3 ( %4 )",
};

locale.ru = {
    dnd_0: "Перетащите файл ключа",
    dnd_1: "Теперь перетащите файл сертификата",
    intro_0: ("Тут можно подписать любой документ цифровой подписью,"+
    " соответствующей Державному Стандарту України. " +
    "Физические лица, предприниматели и юридические лица могут получить "+
    "такую подпись в АЦСК Миндоходов или купить у частных центров "+
    "сертификации. Согласно законов Украины, такая подпись "+
    "эквивалентна автографу на бумаге и может, и уже используется, "+
    "для сдачи отчетов в налоговую, проведения банковских платежей, "+
    "заключения договоров и так далее."),

    intro_1: ("Чтобы наложить электронную подпись на документ, перетащите на страницу файл секретного ключа, который вам выдали в Центре Сертификации. Обычно этот файл называется \"key_6.dat\" и находится на флешке в скрытом виде"),

    add_sign: "Наложить подпись на документ",
    to_store: "Сохранить в хранилище",
    avail_certs: "Доступные сертификати",
    crypted_key: "Секретный ключ защищен паролем. Введете пароль в поле",
    crypted_key_0: "Секретный ключ защищен паролем.",
    crypted_key_1: "Введете пароль в поле",

    label_decrypt: "Расшифровать",
    identity_t: "%1 зарегистрирован в %2 и идентифицируется налоговым номером %3 ( %4 )",

};

module.exports = locale;