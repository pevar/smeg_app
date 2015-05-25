module.exports = {
    init: function () {
        localStorage.clear();
        localStorage.setItem('configurations', JSON.stringify({
            ambients: [{
                selected: {
                    layerId: 'floor',
                        optionIndex: 0
                },
                layers: [
                    {
                        id: "background",
                        title: "Background",
                        options: [
                            {
                                image: "static/images/ambient_01/Immagine 01 Smeg.png"
                            }
                        ]
                    },
                    {
                        id: "floor",
                        title: "Seleziona il tuo pavimento",
                        options: [
                            {
                                image: "static/images/ambient_01/floor/pavimento_1_Base.png",
                                icon: "static/images/ambient_01/floor/Icone_Pavimento_1_Base.png",
                                selected: true
                            },
                            {
                                image: "static/images/ambient_01/floor/pavimento_2_Caldo.png",
                                icon: "static/images/ambient_01/floor/Icone_Pavimento_2_Caldo.png"
                            },
                            {
                                image: "static/images/ambient_01/floor/pavimento_3_Freddo.png",
                                icon: "static/images/ambient_01/floor/Icone_Pavimento_3_Freddo.png"
                            },
                            {
                                image: "static/images/ambient_01/floor/pavimento_4_Grigio.png",
                                icon: "static/images/ambient_01/floor/Icone_Pavimento_4_Grigio.png"
                            }
                        ]
                    },
                    {
                        id: "wall",
                        options: [
                            {
                                image: "static/images/ambient_01/wall/Muro_1_Base.png"
                            }
                        ]
                    },
                    {
                        id: "accessory",
                        options: [
                            {
                                image: "static/images/ambient_01/accessory/Panca_1_Base.png"
                            }
                        ]
                    },
                    {
                        id: "product",
                        options: [
                            {
                                image: "static/images/ambient_01/product/Frigo_1_Giallo.png"
                            }
                        ]
                    }
                ]
            }]
        }));
    }
}