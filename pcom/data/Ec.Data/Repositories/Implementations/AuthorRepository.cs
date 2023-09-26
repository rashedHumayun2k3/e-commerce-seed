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
	public class AuthorRepository : GenericRepository<Author>, IAuthorRepository
	{
		public AuthorRepository(EcDbContext context) : base(context) { }
		public async Task<IEnumerable<Author>> GetAll()
		{
			var query = "Select * from Authors";
			return await GetListAsync(query);
		}

		public async Task<Author> GetById(int id)
		{
			var query = "Select * from Authors where Id=@id";
			DynamicParameters parameter = new DynamicParameters();
			parameter.Add("@id", id);

			return await GetFirstAsync(query, parameter);
		}
	}
}
