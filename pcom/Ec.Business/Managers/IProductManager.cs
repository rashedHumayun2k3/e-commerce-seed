using Ec.Business.Dto.Response;
using Ec.Data.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ec.Business.Managers
{
	public interface IProductManager
	{
		Task<ProductDto> GetProductById(int id);
		Task<List<ProductDto>> GetProduct(string dynamicSearchingQuery);
        Task<List<BrandDto>> GetBrand(string dynamicSearchingQuery);
        Task<List<Author>> GetAuthor(string dynamicSearchingQuery);
        Task<ProductDto> InsertProduct(ProductDto product);
	}
}
