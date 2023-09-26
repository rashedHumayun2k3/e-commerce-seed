using Ec.Data.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ec.Data.Repositories
{
	public interface IProductRepository
	{
		Task<IEnumerable<Product>> GetAllProducts(string dynamicSearchingQuery);
        Task<IEnumerable<Brand>> GetBrandForSearchingProduct(string dynamicSearchingQuery);
        Task<IEnumerable<Author>> GetAuthorListForSearchingProduct(string dynamicSearchingQuery);
        Task<Product> GetProductById(int id);
		Task<int> CreateProductAsync(Product product);
		Task SaveProductToNosqlAsync(Product product);
		Task DeleteById(int id);
	}
}
