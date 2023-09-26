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
	public class ProductRepository : GenericRepository<Product>, IProductRepository
	{
		public readonly EcMongoDbContext _mongoDBContext;
		public ProductRepository(EcDbContext context, EcMongoDbContext mongoDBContext) :base(context) 
		{
			_mongoDBContext	= mongoDBContext;
		}
		public async Task<int> CreateProductAsync(Product product)
		{
			string query = "INSERT INTO Products (Id,Name,Description) VALUES (@Id,@Name, @Description)";
			return await InsertSingleEntity(query, product); 
		}

		public Task DeleteById(int id)
		{
			throw new NotImplementedException();
		}

        public async Task<IEnumerable<Brand>> GetBrandForSearchingProduct(string dynamicSearchingQuery)
        {
            var query = "Select BR.Id, BR.Name, BR.Code From Brands BR INNER JOIN Products P ON BR.Id = P.BrandId where P.CategoryId=33";
            using
            var con = _context.CreateConnection();
            var brandList = await con.QueryAsync<Brand>(query);
            return brandList.ToList();
            throw new NotImplementedException();
        }

        public async Task<IEnumerable<Author>> GetAuthorListForSearchingProduct(string dynamicSearchingQuery)
        {
            var query = "SELECT BR.Id, BR.AuthorName FROM Authors BR INNER JOIN Products P ON BR.Id = P.AuthorId WHERE P.CategoryId=33";
            using
            var con = _context.CreateConnection();
            var authorList = await con.QueryAsync<Author>(query);
            return authorList.ToList();
            throw new NotImplementedException();
        }

        


        public async Task<IEnumerable<Product>> GetAllProducts(string dynamicSearchingQuery)
		{
			var query = "SELECT P.Id ,P.Name,P.BrandId ,BR.Name as BrandName," +
				"P.Thumbnail FROM dbo.Products AS P " +
				"INNER JOIN dbo.Brands BR ON P.BrandId = BR.Id " +
                "WHERE CategoryId = 33";
			using
			var con = _context.CreateConnection();
			var productList = await con.QueryAsync<Product>(query);
			return productList.ToList();
            throw new NotImplementedException();
            
			//using (var con = _context.CreateConnection())
            //{
            //	con.Open();
            //	var result = await con.QueryAsync<Product>(query);
            //	return result.ToList();
            //}
        }

		public async Task<Product> GetProductById(int id)
		{
			var query = "SELECT Id, Name FROM Products where Id=@id";
			DynamicParameters parameter = new DynamicParameters();
			parameter.Add("@id", id);

			var dd = await GetFirstAsync(query, parameter);

			string inputString = "EF3BC8BC-434A-4C7F-995F-E56FED87B72F";
			Guid guid = Guid.Parse(inputString);
			var insertedproduct = await MPushProduct();
			return await MGetProductById(guid);

			using (var con = _context.CreateConnection())
			{
				con.Open();
				var result = await con.QueryFirstOrDefaultAsync<Product>(query, new { id = id});
				return result;
			}
		}
		public async Task<Product> MPushProduct()
		{
			var product1 = new Product
			{
				
				Name = "Laptop Model XYZ",
				Description = "A powerful laptop",
				Attributes = new List<Entities.ProductAttributes> 
				{ 
					new Entities.ProductAttributes(){AttributeName="RAM",AttributeValue ="64GB" },
					new Entities.ProductAttributes(){AttributeName="SSD",AttributeValue ="2TB" }
				}
			};
			await _mongoDBContext.Products.InsertOneAsync(product1);
			return product1;
		}
		public async Task<Product> MGetProductById(Guid id)
		{
			var ramValue = "16GB";
			var filter = Builders<Product>.Filter.Eq("Attributes.AttributeName", "RAM") &
						 Builders<Product>.Filter.Eq("Attributes.AttributeValue", ramValue);

			//var product = await _mongoDBContext.Products.Find(p => p.Id == id).FirstOrDefaultAsync();

			var product = await _mongoDBContext.Products.Find(filter).FirstOrDefaultAsync();
			return product;
		}
		public async Task SaveProductToNosqlAsync(Product product)
		{
			product.Attributes = new List<Entities.ProductAttributes>
				{
					new Entities.ProductAttributes(){AttributeName="RAM",AttributeValue ="64GB" },
					new Entities.ProductAttributes(){AttributeName="SSD",AttributeValue ="2TB" }
				};
		
			await _mongoDBContext.Products.InsertOneAsync(product);
		}
	}
}
