describe('TeamObject', () => {
  describe('new TeamObject()', () => {
    it('takes a name for the team', () => {
      teamObj = new TeamObject('Bears')
      expect(teamObj).toBeDefined()
      expect(teamObj.name).toEqual('Bears')
    })

    it('takes an optional argument for the wins and losses', () => {
      teamObj = new TeamObject('Bears', 4, 6)
      expect(teamObj).toBeDefined()
      expect(teamObj.wins).toBe(4)
      expect(teamObj.losses).toBe(6)
    })

    it('defaults to 0 - 0 if not provided', () => {
      teamObj = new TeamObject('Bears')
      expect(teamObj.wins).toBe(0)
      expect(teamObj.losses).toBe(0)
      expect(teamObj.rank).toBe(null)
    })
  })
})
