export type ArcanepadDB = {
    downloads: {
        android: ApFile[],
        linux: ApFile[],
        web: ApFile[],
        games: ApGame[],
    },
    data: ApData
}

export type ApFile = {
    downloadPath: string
    version: string
}

export type ApData = {

}

export type ApGame = {
    gameId: string
    file: ApFile,
}

const arcanepadDB: ArcanepadDB = {
    downloads: {
        android: [
            {
                downloadPath: '',
                version: '',
            },
        ],
        linux: [
            {
                downloadPath: '',
                version: '',
            },
        ],
        web: [
            {
                downloadPath: '',
                version: '',
            },
        ],
        games: [
            {
                file: {
                    downloadPath: '',
                    version: ''
                },
                gameId: ''
            },
        ]
    },
    data: {

    }
}