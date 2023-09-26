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
	public class PublisherRepository : GenericRepository<Publisher>, IPublisherRepository
	{
		public PublisherRepository(EcDbContext context) : base(context) { }
		public async Task<IEnumerable<Publisher>> GetAll()
		{
			var query = "Select * from Publishers";
			return await GetListAsync(query);
		}

		public async Task<Publisher> GetById(int id)
		{
			var query = "Select * from Publishers where Id=@id";
			DynamicParameters parameter = new DynamicParameters();
			parameter.Add("@id", id);

			return await GetFirstAsync(query, parameter);
		}
	}
}
