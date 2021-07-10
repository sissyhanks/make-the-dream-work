function makeMembers(){
  let members = [];
  myTeamArray.forEach(function(mem) {
    if (mem.role === "manager") {
      members.push(`<div class="row d-flex justify-content-center">
        <div class="col-4 mb-2">
          <div class="card">
            <div class="card-header" style="color: white; background-color: #5da271;">
              <h5>${mem.name}</h5>
              <h6><i class="fas fa-coffee"></i></i> <span>${mem.role}</span> </h6>
            </div>
          <div class="card-body" style="color: #241623; background-color: #f9f1f2;">
            <ul class="list-group" style="color: #241623;">
              <li class="list-group-item" ><a href="mailto:${mem.email}" class="text-decoration-none" style="color: #3087D9;">${mem.email}</a></li>
              <li class="list-group-item" style="color: #241623;">employee id ${mem.id}</li>
              <li class="list-group-item" style="color: #241623;">office number ${mem.officeNumber}</li>
            </ul>
          </div>
        </div>
        </div>
      </div>`);
    } if (mem.role === "intern") {
      members.push(`<div class="row d-flex justify-content-center">
        <div class="col-4 mb-2">
          <div class="card">
            <div class="card-header" style="color: white; background-color: #5da271;">
              <h5>${mem.name}</h5>
              <h6><i class="fas fa-user-graduate"></i> <span>${mem.role}</span> </h6>
            </div>
          <div class="card-body" style="color: #241623; background-color: #f9f1f2;">
            <ul class="list-group" style="color: #241623;">
              <li class="list-group-item" ><a href="mailto:${mem.email}" class="text-decoration-none" style="color: #3087D9;">${mem.email}</a></li>
              <li class="list-group-item" style="color: #241623;">employee id ${mem.id}</li>
              <li class="list-group-item" style="color: #241623;">school ${mem.school}</li>
            </ul>
          </div>
        </div>
        </div>
      </div>`);
    } if (mem.role === "engineer") {
      members.push(`<div class="row d-flex justify-content-center">
        <div class="col-4 mb-2">
          <div class="card">
            <div class="card-header" style="color: white; background-color: #5da271;">
              <h5>${mem.name}</h5>
              <h6><i class="fas fa-glasses"></i> <span>${mem.role}</span> </h6>
            </div>
          <div class="card-body" style="color: #241623; background-color: #f9f1f2;">
            <ul class="list-group" style="color: #241623;">
              <li class="list-group-item" ><a href="mailto:${mem.email}" class="text-decoration-none" style="color: #3087D9;">${mem.email}</a></li>
              <li class="list-group-item" style="color: #241623;">employee id ${mem.id}</li>
              <li class="list-group-item" ><a href="https://github.com/${mem.git}">GitHub Profile</a></li>
            </ul>
          </div>
        </div>
        </div>
      </div>`);
    }
    console.log(members);
  });
}

module.exports = makeMembers();