using System.Collections.Generic;
using CrudApi.Dto;
using CrudApi.Entities;
using Microsoft.AspNetCore.Mvc;

namespace CrudApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UsuarioController : ControllerBase
    {
        [HttpPut] 
        public string Put(UsuarioDto usuario)
        {
            return "Put";
        }

        [HttpGet]
        public List<UsuarioDto> Get()
        {
            var usuarios = new List<UsuarioDto>();
            var u1 = new UsuarioDto
            {
                Cpf = "111.111.111-11",
                Nome = "Ana",
                Cidade = "Sum Paulo"
            };
            var u2 = new UsuarioDto()
            {
                Cpf = "211.111.111-11",
                Nome = "Mengão",
                Cidade = "Rio"
            };
            var u3 = new UsuarioDto
            {
                Cpf = "311.111.111-11",
                Nome = "Milena",
                Cidade = "Sum Paulo"
            };
            var u4 = new UsuarioDto
            {
                Cpf = "411.111.111-11",
                Nome = "Veronica",
                Cidade = "Osasco"
            };
            usuarios.Add(u1);
            usuarios.Add(u2);
            usuarios.Add(u3);
            usuarios.Add(u4);

            return usuarios;
        }

        [HttpPost]
        public string Post(UsuarioDto usuario)
        {
            return "Post";
        }

        [HttpDelete]
        public string Delete(int cpf)
        {
            return "Delete";
        }
    }
}
