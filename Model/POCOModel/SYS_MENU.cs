//------------------------------------------------------------------------------
// <auto-generated>
//    此代码是根据模板生成的。
//
//    手动更改此文件可能会导致应用程序中发生异常行为。
//    如果重新生成代码，则将覆盖对此文件的手动更改。
// </auto-generated>
//------------------------------------------------------------------------------

using System;
using System.Collections.Generic;

namespace Model
{
	public partial class SYS_MENU
	{
		public SYS_MENU ToPOCO(bool isPOCO = true){
			return new SYS_MENU(){
				MENU_ID = this.MENU_ID,
				MENU_NAME = this.MENU_NAME,
				C_ICO = this.C_ICO,
				AREA = this.AREA,
				CONTROLLER = this.CONTROLLER,
				ACTION = this.ACTION,
				PARENT_ID = this.PARENT_ID,
				MENU_LEVEL = this.MENU_LEVEL,
				MENU_ORDER = this.MENU_ORDER,
				GIS_ORDER = this.GIS_ORDER,
				ISSHOW_FLAG = this.ISSHOW_FLAG,
				DEFMENU_ID = this.DEFMENU_ID,
			};
		}
	} 
}