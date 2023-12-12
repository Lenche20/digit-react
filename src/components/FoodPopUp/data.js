const menu = [
    {
        id: 1,
        title: 'akara and akamu',
        category: 'fries',
        price: 1500,
        img:
            'https://imgs.search.brave.com/dYFi9UH-Edhfsc4O7pjF1saJkK4vt80oaTrxo1cEe9E/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9oaXBz/LmhlYXJzdGFwcHMu/Y29tL2htZy1wcm9k/L2ltYWdlcy9kZWxp/c2gtMTkwNjIwLWFp/ci1mcnllci1zd2Vl/dC1wb3RhdG8tZnJp/ZXMtMDUxOS1sYW5k/c2NhcGUtcGYtMTU2/NDA3MDg0NS5qcGc_/Y3JvcD0xeHc6MC44/NDM1MjgwMTg5NDIz/ODM2eGg7Y2VudGVy/LHRvcCZyZXNpemU9/MTIwMDoq',
        desc: `Moin-Moin and Akara are both meals made from pureed beans and spicy ingredients, full of proteins, light and refreshing.`,
    },
    {
        id: 2,
        title: 'Yam and Egg sauce',
        category: 'burger',
        price: 1700,
        img:
            'https://img.buzzfeed.com/buzzfeed-static/static/2019-01/14/17/asset/buzzfeed-prod-web-06/sub-buzz-25688-1547505890-13.jpg?output-quality=auto&output-format=auto',
        desc: `Boiled or fried yam and egg sauce is a usual suspect on the tables of Nigerians. It is quite filling and can last you the whole day, if not careful. Egg sauce is an easy-to-prepare Nigerian sauce made by sautéing tomatoes and eggs. `,
    },
    {
        id: 3,
        title: 'suya',
        category: 'pizza',
        price: 1000,
        img: 'https://imgs.search.brave.com/HgS0j_AFe3k8JQtPVdFN11Y6Q4EkCkQg1IfG7bTkWss/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAxLzc0LzM2Lzcw/LzM2MF9GXzE3NDM2/NzA0NV82aHloN2M4/TWtqdTVRbjFPN21M/UXFtdGZDaFFNZHha/YS5qcGc',
        desc: `This is simply nicely cut beef that is spiced and grilled over an open flame. It is served with fresh cabbage, tomatoes, and onions.`,
    },
    {
        id: 4,
        title: 'Tea and bread',
        category: 'fries',
        price: 1200,
        img:
            'https://imgs.search.brave.com/WmM-zASfeParx5V82mGxCb4rAVCmQHuJotuzzVMsJmQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/dGFzdGluZ3RhYmxl/LmNvbS9pbWcvZ2Fs/bGVyeS90aGUtY2xl/dmVyLWhhY2stdG8t/Z2V0LWN1cmx5LWZy/aWVzLXdpdGhvdXQt/YS1zcGlyYWxpemVy/L2ludHJvLTE2NDk2/OTEyOTkuanBn',
        desc: `No introductions needed. Children, adults, the elderly, everyone loves Nigerian tea and bread. The tea is made out of cocoa and milk, while the bread can be toasted or eaten with a spread. `,
    },
    {
        id: 5,
        title: 'jollof rice',
        category: 'burger',
        price: 2500,
        img:
            'https://img.buzzfeed.com/buzzfeed-static/static/2019-01/14/17/asset/buzzfeed-prod-web-06/sub-buzz-25688-1547505890-13.jpg?output-quality=auto&output-format=auto',
        desc: `No list of Nigerian foods can be complete without a mention of Jollof rice. It's a party dish brought out at celebrations, a signature regional dish, and the recipe with which many West African communities — and countries `,
    },
    {
        id: 6,
        title: 'ofada rice',
        category: 'pizza',
        price: 2200,
        img:
            'https://imgs.search.brave.com/syZbg9wXF1Ot4fAB9OiDZQ0Hp2TSAUvs48w68PuJEcM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTI1/MDk2NTYwMi9waG90/by9waXp6YS5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9NDhQ/N29ZZUVLSXhNS3BC/SC1USDlhOUJqajFT/WUxreUNYMWFudFVV/ZDlPdz0',
        desc: `This is one of those dishes whose very image inspires appetites from the pickiest of eaters. Be careful though: the dish is pretty spicy and tastes great when paired with tongue-cooling rice.`,
    },
    {
        id: 7,
        title: 'Indomie and egg',
        category: 'fries',
        price: 2200,
        img:
            'https://imgs.search.brave.com/7Nerd7j5ynNe3LMqkBBfUIL36A-Z_KyFmH5hyXhTLWs/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTU3/MzEyMDcyL3Bob3Rv/L2Jhc2tldC1vZi1m/cmVuY2gtZnJpZXMu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PTdST2ZsWGJEUGpX/UWJVVE1BVGE5MGFs/SVdEaXI2RWFGQnFy/bU1FdVkyeVU9',
        desc: `Indomie is an extremely popular instant noodle brand in Nigeria, so popular that it has become the household name for all instant noodles. `,
    },
    {
        id: 8,
        title: 'Bread and Beans',
        category: 'burger',
        price: 2500,
        img:
            'https://ocdn.eu/pulscms-transforms/1/U_fk9kpTURBXy81NGM2MzIxNGE2NTVmYmI2YmU4Njg0MTJkM2QyODQzNy5qcGeSlQLNAxQAwsOVAgDNAvjCw4GhMAU',
        desc: `Bread and beans or Ewa agoyin is native to the Yoruba people but it is also one of the foods every struggling Nigerian knows well.  `,
    },
    {
        id: 9,
        title: 'eba and efo riro',
        category: 'pizza',
        price: 1150,
        img: 'https://imgs.search.brave.com/FGxMnG3SHJV8irkJtV_3PezwFwR3_vZ_4Lr4ZWW99OE/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTE2/NDk2NTM3NS9waG90/by9yb2FzdC1kaW5u/ZXIuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPTZnaW9zbTla/czdBSFlLd2N2UVNO/ZHg2LTlsWWhnQzJX/YWtVZkpEQ1BnQVE9',
        desc: `Ẹ̀bà is a staple food mainly eaten in the West African subregion, particularly in Nigeria and some parts of Ghana. It came from Nigeria originally`,
    },
]
export default menu