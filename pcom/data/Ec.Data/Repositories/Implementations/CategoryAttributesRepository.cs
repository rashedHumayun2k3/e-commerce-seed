using Ec.Data.Context;
using Ec.Data.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Dapper;
using Microsoft.Extensions.Configuration;
using System.Data.SqlClient;
using System.Data;
using System.Collections;
using MongoDB.Driver;

namespace Ec.Data.Repositories.Implementations
{
	public class CategoryAttributesRepository : GenericRepository<CategoryAttributes>, ICategoryAttributesRepository
	{
		public CategoryAttributesRepository(EcDbContext context) : base(context) { } 
		
		public async Task<IEnumerable<CategoryAttributes>> GetAll()
		{
			var query = "Select * from CategoryAttributes";
			return await GetListAsync(query);
		}
		public async Task<IEnumerable<CategoryAttributes>> GetAllByCategory(int categoryId)
		{
			var query = "Select * from CategoryAttributes where CategoryId=@categoryId";
			DynamicParameters parameter = new DynamicParameters();
			parameter.Add("@categoryId", categoryId);

			return await GetListAsync(query, parameter);
		}
	}
}
