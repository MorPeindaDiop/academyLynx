"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var admin_guard_1 = require("./core/guard/admin.guard");
var informazioni_guard_1 = require("./core/guard/informazioni.guard");
var questionario_guard_1 = require("./core/guard/questionario.guard");
var risultato_guard_1 = require("./core/guard/risultato.guard");
var routes = [
    { path: 'form', loadChildren: function () { return Promise.resolve().then(function () { return require('./features/conferma-dati/conferma-dati.module'); }).then(function (m) { return m.ConfermaDatiModule; }); } },
    { path: 'form/informazioni', loadChildren: function () { return Promise.resolve().then(function () { return require('./features/conferma-dati/conferma-dati.module'); }).then(function (m) { return m.ConfermaDatiModule; }); }, canActivate: [informazioni_guard_1.InformazioniGuard] },
    { path: 'questionario', loadChildren: function () { return Promise.resolve().then(function () { return require('./features/questionario/questionario.module'); }).then(function (m) { return m.QuestionarioModule; }); }, canActivate: [questionario_guard_1.QuestionarioGuard] },
    { path: 'risultato', loadChildren: function () { return Promise.resolve().then(function () { return require('./features/risultato/risultato.module'); }).then(function (m) { return m.RisultatoModule; }); }, canActivate: [risultato_guard_1.RisultatoGuard] },
    { path: 'adminlogin', loadChildren: function () { return Promise.resolve().then(function () { return require('./features/adminlogin/adminlogin.module'); }).then(function (m) { return m.AdminloginModule; }); } },
    { path: 'admin/skill', loadChildren: function () { return Promise.resolve().then(function () { return require('./featuresAdmin/skill/skill.module'); }).then(function (m) { return m.SkillModule; }); }, canActivate: [admin_guard_1.AdminGuard] },
    { path: 'admin/seniority', loadChildren: function () { return Promise.resolve().then(function () { return require('./featuresAdmin/seniority/seniority.module'); }).then(function (m) { return m.SeniorityModule; }); }, canActivate: [admin_guard_1.AdminGuard] },
    { path: 'admin/question', loadChildren: function () { return Promise.resolve().then(function () { return require('./featuresAdmin/question/question.module'); }).then(function (m) { return m.QuestionModule; }); }, canActivate: [admin_guard_1.AdminGuard] },
    { path: 'admin/field', loadChildren: function () { return Promise.resolve().then(function () { return require('./featuresAdmin/field/field.module'); }).then(function (m) { return m.FieldModule; }); }, canActivate: [admin_guard_1.AdminGuard] },
    { path: 'admin/candidate', loadChildren: function () { return Promise.resolve().then(function () { return require('./featuresAdmin/candidate/candidate.module'); }).then(function (m) { return m.CandidateModule; }); }, canActivate: [admin_guard_1.AdminGuard] },
    { path: 'admin/panel', loadChildren: function () { return Promise.resolve().then(function () { return require('./featuresAdmin/panel/panel.module'); }).then(function (m) { return m.PanelModule; }); }, canActivate: [admin_guard_1.AdminGuard] },
    { path: 'login', loadChildren: function () { return Promise.resolve().then(function () { return require('./features/login/login.module'); }).then(function (m) { return m.LoginModule; }); } },
    { path: 'mail', loadChildren: function () { return Promise.resolve().then(function () { return require('./features/mail/mail.module'); }).then(function (m) { return m.MailModule; }); } },
    { path: '', redirectTo: '/adminlogin', pathMatch: 'full' },
    { path: 'helpServer', loadChildren: function () { return Promise.resolve().then(function () { return require('./features/help-server/help-server.module'); }).then(function (m) { return m.HelpServerModule; }); } },
    { path: 'emailSuccess', loadChildren: function () { return Promise.resolve().then(function () { return require('./features/email-success/email-success.module'); }).then(function (m) { return m.EmailSuccessModule; }); } },
    { path: '**', loadChildren: function () { return Promise.resolve().then(function () { return require('./features/page-not-found/page-not-found.module'); }).then(function (m) { return m.PageNotFoundModule; }); } },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
