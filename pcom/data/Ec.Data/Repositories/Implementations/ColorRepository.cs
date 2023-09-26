using Dapper;
using Ec.Data.Context;
using Ec.Data.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ec.Data.Repositories.Implementations
{
    public class ColorRepository : GenericRepository<Color>, IColorRepository
    {
        public ColorRepository(EcDbContext context) : base(context) { }
        public async Task<IEnumerable<Color>> GetAll()
        {
            var query = "Select * from Colors";
            return await GetListAsync(query);
        }

    }
}
