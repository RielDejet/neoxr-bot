exports.run = {
   usage: ['menu', 'help', 'bot'],
   async: async (m, {
      client,
      isPrefix
   }) => {
      let rows = [{
         title: 'DOWNLOADER📩',
         rowId: `${isPrefix}menutype 1`,
         description: ``
      }, {
         title: 'GROUP TOOLS🗂️',
         rowId: `${isPrefix}menutype 2`,
         description: ``
      }, {
         title: 'TEXT MAKER📭',
         rowId: `${isPrefix}menutype 3`,
         description: ``
      }, {
         title: 'USER INFO💌',
         rowId: `${isPrefix}menutype 4`,
         description: ``
      }, {
         title: 'UTILITIES☢️',
         rowId: `${isPrefix}menutype 5`,
         description: ``
      }, {
         title: 'OWNER TOOLS🔰',
         rowId: `${isPrefix}menutype 6`,
         description: ``
      }, {
         title: 'SPECIAL♥️',
         rowId: `${isPrefix}menutype 7`,
         description: ``
      }]
      await client.sendList(m.chat, '', global.db.setting.msg, '© khurushi-bot v2.2.0', 'CLICK HERE!', [{
         rows
      }], m)
   },
   error: false
}
