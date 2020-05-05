const defaultDataset = {
    "init": {
        answers: [
            {content: "仕事を依頼したい", nextId: "job_offer"},
            {content: "制作物を見たい", nextId: "works"},
            {content: "一度話をしてみたい", nextId: "contact_form"},
        ],
        question: "こんにちは！ご用件はなんでしょうか？",
    },
    "job_offer": {
        answers: [
            {content: "Webサイトを制作してほしい", nextId: "website"},
            {content: "Webアプリを開発してほしい", nextId: "webapp"},
            {content: "その他の仕事を依頼したい", nextId: "other_jobs"}
        ],
        question: "どのようなお仕事でしょうか？",
    },
    "website": {
        answers: [
            {content: "問い合わせる", nextId: "contact"},
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "Webサイト制作についてですね。コチラからお問い合わせできます。",
    },
    "webapp": {
        answers: [
            {content: "問い合わせる", nextId: "contact"},
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "Webアプリ開発についてですね。コチラからお問い合わせできます。",
    },
    "other_jobs": {
        answers: [
            {content: "問い合わせる", nextId: "contact"},
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "その他についてですね。コチラからお問い合わせできます。",
    },
    "works": {
        answers: [
            {content: "制作物紹介サイト", nextId: "https://tatsuyahirayama.github.io/tatsuya-works/"},
            {content: "深センNAVI", nextId: "https://shenzhennavi.net/"},
            {content: "GitHubはこちら", nextId: "https://github.com/tatsuyahirayama"}
        ],
        question: "制作物についてですね。制作物紹介サイトでは各制作物の概要を解説。深センNAVIは中国出張者用の情報交換サービスです。",
    },
    "contact_form": {
        answers: [
            {content: "問い合わせる", nextId: "contact"},
            {content: "TwitterからDMする", nextId: "https://twitter.com/koneo0309"},
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "ありがとうございます！下記お問い合わせからご連絡ください。TwitterのDMからもコンタクト頂けます。",
    }
}

export default defaultDataset