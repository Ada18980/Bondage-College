"use strict";

var InventoryItemTorsoFuturisticHarnessOptions = [
	{
		Name: "Full",
		Property: { Type: null, Difficulty: 2},
	},
	{
		Name: "Upper",
		Property: { Type: "Upper", Difficulty: 0},
	},
	{
		Name: "Lower",
		Property: { Type: "Lower", Difficulty: 0},
	},
]

// Loads the item extension properties
function InventoryItemTorsoFuturisticHarnessLoad() {
	var C = (Player.FocusGroup != null) ? Player : CurrentCharacter;
	if (InventoryItemMouthFuturisticPanelGagValidate(C) !== "") {
		InventoryItemMouthFuturisticPanelGagLoadAccessDenied()
	}  else
		ExtendedItemLoad(InventoryItemTorsoFuturisticHarnessOptions, "FuturisticHarnessType");
}

// Draw the item extension screen
function InventoryItemTorsoFuturisticHarnessDraw() {
	var C = (Player.FocusGroup != null) ? Player : CurrentCharacter;
	if (InventoryItemMouthFuturisticPanelGagValidate(C) !== "") {
		InventoryItemMouthFuturisticPanelGagDrawAccessDenied()
	} else {
		ExtendedItemDraw(InventoryItemTorsoFuturisticHarnessOptions, "FuturisticHarnessType");
		
		DrawAssetPreview(1387, 75, DialogFocusItem.Asset);
		
		var FuturisticCollarItems = InventoryItemNeckFuturisticCollarGetItems(C)
		
		if (FuturisticCollarItems.length > 0) {
			DrawButton(1400, 910, 200, 55, DialogFindPlayer("FuturisticCollarColor"), "White");
		}
	}
}


function InventoryItemTorsoFuturisticHarnessPublishAction(C, Option) {
	var msg = "FuturisticHarnessSet" + Option.Name;
	var Dictionary = [
		{ Tag: "SourceCharacter", Text: Player.Name, MemberNumber: Player.MemberNumber },
		{ Tag: "DestinationCharacter", Text: C.Name, MemberNumber: C.MemberNumber },
	];
	ChatRoomPublishCustomAction(msg, true, Dictionary);
}

// Catches the item extension clicks
function InventoryItemTorsoFuturisticHarnessClick() {
	var C = (Player.FocusGroup != null) ? Player : CurrentCharacter;
	if (InventoryItemMouthFuturisticPanelGagValidate(C) !== "") {
		InventoryItemMouthFuturisticPanelGagClickAccessDenied()
	} else {
		
		if ((MouseX >= 1885) && (MouseX <= 1975) && (MouseY >= 25) && (MouseY <= 110)) InventoryItemTorsoFuturisticHarnessExit();
		
		ExtendedItemClick(InventoryItemTorsoFuturisticHarnessOptions);
		
		var FuturisticCollarItems = InventoryItemNeckFuturisticCollarGetItems(C)
		if (MouseIn(1400, 910, 200, 55) && FuturisticCollarItems.length > 0 && DialogFocusItem) { InventoryItemNeckFuturisticCollarColor(C, DialogFocusItem); InventoryItemTorsoFuturisticHarnessExit();}
	}
}

function InventoryItemTorsoFuturisticHarnessExit() {
	InventoryItemMouthFuturisticPanelGagExitAccessDenied()
}